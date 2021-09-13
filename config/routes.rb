Rails.application.routes.draw do
  root 'pages#index'
  
  Healthcheck.routes(self)
end
