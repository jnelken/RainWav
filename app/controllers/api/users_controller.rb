class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render 'index'
  end

  def create
  end

  def show
    @user = User.find_by_username(params[:id].downcase)
    @user ||= User.find(params[:id])

  end
end
