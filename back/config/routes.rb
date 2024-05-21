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

      resource :user, only: [:show, :update] do
        collection do
          get 'random_note', to: 'users#random_note'
        end
      end
      resources :notes, only: [:index, :show] do
        collection do
          get 'random_note', to: 'notes#random_note'
        end
      end
      resources :scores, only: [:create]
      resources :difficulties, only: [:index]
      resources :genders, only: [:index]
      resources :modes, only: [:index]
    end
  end
end