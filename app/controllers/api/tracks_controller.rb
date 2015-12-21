class Api::TracksController < ApplicationController
  def index
    unless params[:user_id]
      @tracks = Track.all()
    else
      @tracks = Track.where(user_id: params[:user_id])
    end
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
    render :show
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre_id, :plays, :user_id, :audio, :image, :description)
  end
end
