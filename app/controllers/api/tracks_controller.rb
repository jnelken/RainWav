class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render 'index'
  end

  def create
  end

  def show
    @track = Track.find(params[:id])
  end
end
