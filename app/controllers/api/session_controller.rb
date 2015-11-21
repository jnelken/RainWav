class Api::SessionController < ApplicationController

  require 'BYEBUG'
  def index
    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render json: @user
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render json: @user
    else
      render json: {errors: ["Invalid username or password"]}, status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end

end
