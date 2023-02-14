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
  patch '/edit_profile', to: 'users#update_profile'

  #administrator routes

   # admin routes 

  #  get "/admin" => "administrators#show"
  #  get "/admin/dishes" => "administrators#genre_index"
  #  get "/admin/orders" => "administrators#purchase_index"
  #  get "/admin/orders/:id" => "administrators#order"
  #  get "/admin/users" => "administrators#user_index"
  #  get "/admin/categories" => "administrators#category_index"
  #  patch "/admin/orders/:order_id" => "administrators#update_status"
  #  delete '/admin/destroy/:id' => "administrators#admin_destroy"


  get '/user_purchases/:id', to: 'purchases#user_purchases'
  get '/user_records/:id', to: 'records#user_records'

  get '/randomized_records', to: 'records#randomized_records'

end
