# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#        api_user_playlists GET    /api/users/:user_id/playlists(.:format)                                                  api/playlists#index {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#             api_playlists POST   /api/playlists(.:format)                                                                 api/playlists#create {:format=>:json}
#         edit_api_playlist GET    /api/playlists/:id/edit(.:format)                                                        api/playlists#edit {:format=>:json}
#              api_playlist PATCH  /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                                                             api/playlists#destroy {:format=>:json}
#                      root GET    /                                                                                        root#root

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create] do
      resources :playlists, only: [:index]
    end

    resources :playlists, except: [:index, :show, :new]
  end
  
  root to: 'root#root'
end
