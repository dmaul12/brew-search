Rails.application.routes.draw do
resources :brews

  root 'welcome#index'

  # get 'brews/index'

  # get 'brews/show'

  get 'signup' => 'users#new'
  resources :users

  get '/login' => 'sessions#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
