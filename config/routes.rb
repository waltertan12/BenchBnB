Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:create, :index]
  end
end
