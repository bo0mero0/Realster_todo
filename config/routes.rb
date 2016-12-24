Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :todoitems, only: [:index, :create]
  end

  # get 'api/todoitems', to: 'api/todoitems#index'
  # post 'api/todoitems', to: 'api/todoitems#create'

  root "static_pages#root"

end
