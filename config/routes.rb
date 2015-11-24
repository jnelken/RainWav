Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :tracks
    resources :session, only: [:index, :create, :destroy]
    resources :users, only: [:create, :show, :update]
  end

  root 'static_pages#root'
  resources :users, only: [:new, :create]
  # resource :session, only: [:new, :create, :destroy]
end
