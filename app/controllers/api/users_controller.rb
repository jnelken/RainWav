class Api::UsersController < ApplicationController
  def index
    @users = User.includes(:tracks, :followers, :followees)
  end

  def show
    @user = User.find_by_username(params[:id].downcase)
    @user ||= User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    unless passwords_match
      render json: ["Passwords don't match. Try again"], status: :unprocessable_entity
      return
    end

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages,  status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json:  @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end

  def passwords_match
    params[:user][:password] == params[:user][:retype_password]
  end
end
