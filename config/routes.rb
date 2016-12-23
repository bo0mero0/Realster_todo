Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :todo, only: [:create, :show]
  end

  get 'api/todos', to: 'api/todoitems#index'
  post 'api/todos', to: 'api/todoitems#create'
  root "static_pages#root"

end
