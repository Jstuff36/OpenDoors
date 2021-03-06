Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :trips, only: [:index, :create, :update, :destroy]
    resources :references, only: [:index, :create]
  end

end
