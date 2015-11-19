class Api::TracksController < ApplicationController
  require 'byebug'
  def index
    @tracks = Track.all
    if (params[:user_id])
    @tracks = @tracks.map do |track|
        return track if track.user_id == params[:user_id].to_i
      end
    end
    byebug
  end

  def new
  end

  def create
  end

  def show
    @track = Track.find(params[:id])

  end
end
