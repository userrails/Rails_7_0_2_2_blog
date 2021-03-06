Rails.application.routes.draw do
  devise_scope :user do
    # Redirests signing out users back to sign-in
    get "users", to: "devise/sessions#new"
  end

  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "todos#index"
  
  resources :todos

  resources :articles do
    resources :comments
  end

  resources :pages, except: %i[index show new create edit update destroy] do
    collection do
      get :copy_pin
      get :slideshow
      get :content_loader
      get :messages
      get :comments
    end
  end
end
