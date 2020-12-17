class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: current_user().id)
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render json: @playlist
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = selected_playlist
  end

  def destroy
    @playlist = selected_playlist
    if @playlist
      @playlist.destroy
      render json: @playlist.id
    else
      render json: ['Playlist not found']
    end
  end
  
  private

  def selected_playlist
    Playlist.find(params[:id])
  end
  
  def playlist_params
    params.require(:playlist).permit(:user_id, :title)
  end
end
