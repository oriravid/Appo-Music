# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#          api_album_tracks GET    /api/albums/:album_id/tracks(.:format)                                                   api/tracks#index {:format=>:json}
#                api_albums GET    /api/albums(.:format)                                                                    api/albums#index {:format=>:json}
#                 api_album GET    /api/albums/:id(.:format)                                                                api/albums#show {:format=>:json}
#                 api_track PATCH  /api/tracks/:id(.:format)                                                                api/tracks#update {:format=>:json}
#                           PUT    /api/tracks/:id(.:format)                                                                api/tracks#update {:format=>:json}
#                api_artist GET    /api/artists/:id(.:format)                                                               api/artists#show {:format=>:json}
#                           POST   /api/playlists/:playlist_id/tracks/:track_id(.:format)                                   api/tracks#create {:format=>:json}
#                           DELETE /api/playlists/:playlist_id/tracks/:track_id(.:format)                                   api/tracks#destroy {:format=>:json}
#             api_playlists GET    /api/playlists(.:format)                                                                 api/playlists#index {:format=>:json}
#                           POST   /api/playlists(.:format)                                                                 api/playlists#create {:format=>:json}
#         edit_api_playlist GET    /api/playlists/:id/edit(.:format)                                                        api/playlists#edit {:format=>:json}
#              api_playlist PATCH  /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                                                             api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                                                             api/playlists#destroy {:format=>:json}
#            api_user_saves POST   /api/user_saves(.:format)                                                                api/user_saves#create {:format=>:json}
#                           DELETE /api/user_saves(.:format)                                                                api/user_saves#destroy {:format=>:json}
#                      root GET    /                                                                                        root#root

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resource :session, only: [:create, :destroy]

    resources :albums, only: [:index, :show] do
      resources :tracks, only: [:index]
    end

    resources :tracks, only: [:update]
    resources :artists, only: [:show]

    resources :playlists, except: [:show, :new] do
      post '/tracks/:track_id', to: 'tracks#create'
      delete '/tracks/:track_id', to: 'tracks#destroy'
    end
    
    resources :user_saves, only: [:create]
    delete '/user_saves/', to: 'user_saves#destroy'


  end
  
  root to: 'root#root'
end
