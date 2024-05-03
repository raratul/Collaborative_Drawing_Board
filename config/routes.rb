Rails.application.routes.draw do
  resources :boards, only: [:index, :create, :show]
  mount ActionCable.server => '/cable'
  post '/boards', to: 'boards#create', as: 'boards_create'
  # get '/boards/:id', to: 'boards#show', as: 'boards_show'
  root 'boards#index'
end
