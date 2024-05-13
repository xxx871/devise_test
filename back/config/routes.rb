Rails.application.routes.draw do
  post 'api/auth/:provider/callback', to: 'api/v1/auth/registrations#create'
  post 'api/auth/signin/github', to: 'api/v1/auth/registrations#create'
  post 'auth/:provider/callback', to: 'api/v1/users#create'
  resources :pages, only: [:index]
  namespace :api do
    namespace :v1 do
      resources :home, only: [:index]
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: [:index]
      end
    end
  end
end