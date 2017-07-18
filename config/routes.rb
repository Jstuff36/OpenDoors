Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resource :sesssion, only: [:create, :destroy]
  end

  root "static_pages#root"
end
