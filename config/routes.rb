Rails.application.routes.draw do
resources :brews

  root 'welcome#index'
  resources :savebrew

  # get 'brews/index'

  # get 'brews/show'

  get 'signup' => 'users#new'
  resources :users

  get '/login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
