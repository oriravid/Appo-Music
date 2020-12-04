# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#             api_playlists GET    /api/playlists(.:format)                                                                 api/playlists#index {:format=>:json}
#                           POST   /api/playlists(.:format)                                                                 api/playlists#create {:format=>:json}
#              api_playlist GET    /api/playlists/:id(.:format)                                                             api/playlists#show {:format=>:json}
#                           PATCH  /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                                                             api/playlists#destroy {:format=>:json}
#         edit_api_playlist GET    /api/playlists/:id/edit(.:format)                                                        api/playlists#edit {:format=>:json}
#                      root GET    /                                                                                        root#root

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resource :users, only: [:post]
    resources :playlists, except: [:new, :put]
  end
  
  root to: 'root#root'
end
