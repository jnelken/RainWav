class Api::TracksController < ApplicationController
  require 'byebug'
  def index

    @tracks = Track.all

    # byebug
    unless params[:user_id].nil?
    @tracks = @tracks.map do |track|
       if track.user_id == params[:user_id].to_i
         track
       end
      end

      @tracks
    end

    # byebug
  end

  def new
  end

  def create
  end

  def show
    @track = Track.find(params[:id])
  end
end
