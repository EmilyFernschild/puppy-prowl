Rails.application.routes.draw do
  resources :reviews
  resources :appointments
  resources :walkers
  resources :dogs
  resources :clients
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "clients#create"
  get "/user", to: "clients#user"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
