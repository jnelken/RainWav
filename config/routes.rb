Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :tracks
    resources :session, only: [:show, :create, :destroy]
    resources :users, only: [:index, :show, :edit, :update, :destroy]
  end

  root 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
