Rails.application.routes.draw do
  root 'pages#index'

  # Authentication
  get '/login', to: 'sessions#new'
  post '/sessions', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  Healthcheck.routes(self)
end
