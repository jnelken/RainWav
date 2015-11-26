class Api::FollowsController < ApplicationController

  def index
    @follows = Follow.all.select { |follow| follow.follower_id == current_user.id }
    @follows.each { |follow| follow.status = "Following" }
    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      @follow.status = "Following"
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
    @follow.status = "Follow"
    render :show
  end


    private

    def follow_params
      params.require(:follow).permit(:following_id, :follower_id)
    end
end
