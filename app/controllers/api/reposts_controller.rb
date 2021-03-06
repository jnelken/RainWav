class Api::RepostsController < ApplicationController

  def index
    @reposts = Repost.where(user_id: current_user.id)
    render :index
  end

  def create
    @repost = Repost.new(repost_params)

    if @repost.save
      render :show
    else
      render json: @repost.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @repost = Repost.find(params[:id])
    @repost.destroy
    render :show
  end

  private
    def repost_params
      params.require(:repost).permit(:track_id, :user_id)
    end
end
