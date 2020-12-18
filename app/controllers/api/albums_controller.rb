class Api::AlbumsController < ApplicationController
  def index
    if params[:request_type]
        @current_user = current_user()
        @albums = current_user().saved_track_albums.uniq
        render :user_index
    else
        @albums = Album.all.includes(:tracks, :artist)
    end
  end

  def show
    @album = selected_album
  end
  
  private

  def selected_album
    Album.find(params[:id])
  end
  
  def playlist_params
    params.require(:album).permit(:id, :request_type)
  end
end
