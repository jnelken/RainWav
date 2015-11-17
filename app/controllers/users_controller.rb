    require 'byebug'

class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if params[:user][:password] != params[:user][:retype_password]
      flash.now[:notice] = ["Passwords don't match. Try again"]
      redirect_to sessions_url
      return
    end

    if @user.save
      flash.now[:notice] = "Success!"
      render :index
    else
      flash.now[:notice] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
