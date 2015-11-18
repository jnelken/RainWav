Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:index, :create]
    resources :users, only: [:index, :show] do
      resources :tracks, only: [:show]
    end
  end

  root 'static_pages#root'
  resources :users, only: [:index, :new, :create]
  resource :session, only: [:new, :create, :destroy]
end
