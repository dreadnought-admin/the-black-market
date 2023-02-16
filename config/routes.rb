Rails.application.routes.draw do
  resources :watched_records, only: [:index, :create, :destroy]
  get '/watched', to: 'watched_records#index', as: 'watched'

  resources :comments
  resources :records

  resources :shopping_carts
  resources :purchases

  resources :users

  get 'sessions/create'
  get 'sessions/destroy'
  

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete "/logout", to: "sessions#destroy"


  post '/signup', to: 'users#create'

  #order routes 

  get '/user_purchases/:id', to: 'purchases#user_purchases'
  post '/order/:user_id/:orderId/:total', to: 'sessions#create_order'


  #shopping cart custom

  get 'shopping_cart', to: 'sessions#shopping_cart'
  post 'new/:user_id/:record_id', to: 'shopping_carts#new'

  delete '/delete/:user_id', to: 'shopping_carts#delete_all'
  delete '/destroy/:user_id/:record_id', to: 'shopping_carts#delete_cart_item'



  get '/user_records/:id', to: 'records#user_records'

  #randomized features
  
  get '/randomized_records', to: 'records#randomized_records'

end
