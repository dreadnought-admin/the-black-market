Rails.application.routes.draw do
  resources :watched_records, only: [:index, :create, :destroy]
  get '/watched', to: 'watched_records#index', as: 'watched'

  resources :comments
  resources :records

  resources :users

  get 'sessions/create'
  get 'sessions/destroy'
  

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete "/logout", to: "sessions#destroy"


  post '/signup', to: 'users#create'
  patch "/edit_profile", to: "users#update_profile"

  get "/user_records/:id", to: "records#user_records"

  get "/randomized_records", to: "records#randomized_records"

end
