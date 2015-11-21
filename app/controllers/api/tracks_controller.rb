class Api::TracksController < ApplicationController

  def index

    @tracks = Track.all

    # byebug
    unless params[:user_id].nil?
      userTracks = []
      @tracks.each do |track|
         if track.user_id == params[:user_id].to_i
           userTracks << track
         end

      @tracks = userTracks
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
