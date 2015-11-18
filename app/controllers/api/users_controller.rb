class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render 'index'
  end

  def create
  end
end
