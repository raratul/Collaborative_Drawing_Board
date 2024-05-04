Rails.application.routes.draw do
  # mount ActionCable.server => '/cable'
  root 'boards#index'
  resources :boards
  # post '/boards/create', to: 'boards#create', as: 'boards_create'
end
