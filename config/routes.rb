Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :trips, only: [:index, :create]
  end

  root "static_pages#root"
end
