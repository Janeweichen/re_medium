Rails.application.routes.draw do
  devise_for :users, controllers: {
  registrations: 'users/registrations'
    }

  resources :stories
  root 'pages#index'

  get '@:username/:story_id', to: 'pages#show', as: 'story_page'
  get '@:username', to: 'pages#user', as: 'user_page'
  
  get "/demo", to: 'pages#demo'
  get "/hello", to: 'pages#hello'
end
