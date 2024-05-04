# Rails.application.routes.draw do
#   resources :boards, only: [:index, :create, :show]
#   mount ActionCable.server => '/cable'
#   post '/boards', to: 'boards#create', as: 'boards_create'
#   # get '/boards/:id', to: 'boards#show', as: 'boards_show'
#   root 'boards#index'
# end

# Rails.application.routes.draw do
#   root 'boards#index'
#   resources :boards do
#     get 'show', on: :collection
#   end
#   post '/boards/create', to: 'boards#create', as: 'boards_create'
# end

Rails.application.routes.draw do
  root 'boards#index'
  resources :boards
  mount ActionCable.server => '/cable'
  post '/boards/create', to: 'boards#create', as: 'boards_create'
end
