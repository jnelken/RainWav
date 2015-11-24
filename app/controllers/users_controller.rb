class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    unless passwords_match
      flash.now[:notice] = ["Passwords don't match. Try again"]
      render :new
      return
    end

    if @user.save
      sign_in(@user)
      redirect_to :root
    else
      render json: @user.errors.full_messages
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end

    def passwords_match
      params[:user][:password] == params[:user][:retype_password]
    end

end
