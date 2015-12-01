class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:user, :genre, :reposts)

    if params[:user_id]
      userTracks = []
      @tracks.each do |track|
         if track.user_id == params[:user_id].to_i
           userTracks << track
         end
      end

      @tracks = userTracks
      render :index
    end

    @tracks
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    @user = @track.user
    render 'api/users/show'
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre_id, :plays, :user_id, :audio, :image, :description)
  end
end
