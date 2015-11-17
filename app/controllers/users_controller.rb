class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    require 'byebug'
    @user = User.new(user_params)

    if @user.save
      flash.now[:notice] = "Success!"
      render :index
    else
      flash.now[:notice] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :retype_password)
  end

end
