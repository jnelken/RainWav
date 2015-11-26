class Api::RepostsController < ApplicationController

  def index
    @reposts = Repost.all
    @reposts.each { |repost| repost.status = "Reposted" }
    render :index
  end

  def create
    @repost = Repost.new(repost_params)

    if @repost.save
      @repost.status = "Reposted"
      render :show
    else
      render json: @repost.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @repost = Repost.find_by(params[:id])
    @repost.destroy
    @repost.status = "Repost"
    render :show
  end


    private

    def repost_params
      params.require(:repost).permit(:track_id, :user_id)
    end
end
