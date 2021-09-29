Rails.application.routes.draw do
  namespace :admin do
    root to: 'dashboard#index'
    resources :jobs, only: [:create]
  end

  post 'schedule/daily', to: 'scheduler#daily'

  devise_for :users, path: 'auth', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    password: 'secret',
    confirmation: 'verification',
    unlock: 'unblock',
    registration: 'register',
    sign_up: 'signup'
  }

  root 'admin/dashboard#index'
  Healthcheck.routes(self)
end
