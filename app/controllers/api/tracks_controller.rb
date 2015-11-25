class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all

    if params[:user_id]
      userTracks = []
      @tracks.each do |track|
         if track.user_id == params[:user_id].to_i
           userTracks << track
         end
      end

      @tracks = userTracks
    end

    @tracks
  end

  def new
  end

  def create
  end

  def update
    @track = Track.new(params[:track])

    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @track = Track.find(params[:id])
  end
end
