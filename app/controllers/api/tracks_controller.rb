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
    @track = Track.new(track_params)
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    #get track id???
    @track = Track.new(track_params)

    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre_id, :user_id, :audio, :image, :description)
  end
end
