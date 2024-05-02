Rails.application.routes.draw do
  get 'boards/index'
  get 'boards/show'
  get 'boards/create'

  resources :boards, only: [:index, :show]
  resources :drawings, only: [:create]

  root 'boards#index'
  
end
