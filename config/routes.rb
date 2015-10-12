Rails.application.routes.draw do
  root to: "static_pages#index"
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:create, :index]
    resources :reviews, only: [:create]
  end
end
