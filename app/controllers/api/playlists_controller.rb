class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      # render "api/playlists/show"
      render json: @playlist
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end
  
  def update
    @playlist = selected_playlist
    if @playlist && @playlist.update_attributes(playlist_params)
      # render :show
      render json: @playlist
    elsif !@playlist
      render json: ['Playlist not found'], status: 400
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end
  
  def show
    @playlist = selected_playlist
    if @playlist
      # render :show
      render json: @playlist
    else
      render json: ['Playlist not found'], status: 400
    end
  end

  def index
    @playlists = Playlist.all
  end
  
  def destroy
    @playlist = selected_playlist
    if @playlist
      @playlist.destroy
      # render :show
      render json: @playlist
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
