class Api::AlbumsController < ApplicationController
  def index
    if params[:user_id]
        @albums = User.find(params[:user_id]).saved_track_albums.uniq
    else
        @albums = Album.all
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
    params.require(:album).permit(:id, :user_id)
  end
end
