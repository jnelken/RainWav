Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :session, only: [:index, :create, :destroy]
    resources :users,   only: [:index, :show, :create, :update]
    resources :tracks,  only: [:index, :show, :create, :update, :destroy]
    resources :genres,  only: [:index, :show, :create]

    resources :follows, only: [:index, :show, :create, :destroy]
    resources :reposts, only: [:index, :create, :destroy]
  end

  # resources :users, only: [:new, :create]
  # resource :session, only: [:new, :create, :destroy]
end
