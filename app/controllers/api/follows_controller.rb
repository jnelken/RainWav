class Api::FollowsController < ApplicationController

  def index
    if current_user
      @follows = Follow.all.select { |follow| follow.follower_id == current_user.id }
    end

    @follows
    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @follow = Follow.find(params[:id])
    render :show
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    @follow
    render :show
  end


    private

    def follow_params
      params.require(:follow).permit(:following_id, :follower_id)
    end
end
