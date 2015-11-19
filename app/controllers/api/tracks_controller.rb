class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render 'index'
  end

  def create
  end

  def show
    @tracks = Track.all.find_by_user_id(params[:user_id])
    @track ||= Track.find(params[:id])

  end
end
