class Api::UsersController < ApplicationController

  before_action :require_signed_in

  def index
    @users = User.all
    render 'index'
  end

  def show
    @user = User.find_by_username(params[:id].downcase)
    @user ||= User.find(params[:id])
  end
end
