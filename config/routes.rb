Rails.application.routes.draw do
  resources :watched_records, only: [:index, :create, :destroy]

  get '/watched', to: 'watched_records#index', as: 'watched'
  
end
