Rails.application.routes.draw do
  resources :pages, only: [:index]
  namespace :api do
    namespace :v1 do
      resources :home, only: [:index]
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: [:index]
        post 'github', to: 'github#create'
      end

      resource :user, only: [:show] do
        resources :notes, only: [:index, :show]
      end
    end
  end
end