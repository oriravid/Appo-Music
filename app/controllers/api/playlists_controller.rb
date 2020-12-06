class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user_id])
    # .order(:title)
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end
  
  def update
    @playlist = selected_playlist
    if @playlist && @playlist.update_attributes(playlist_params)
      render "api/playlists/show"
    elsif !@playlist
      render json: ['Playlist not found'], status: 400
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end
  
  # def show
  #   @playlist = selected_playlist
  #   if @playlist
  #     # render :show
  #     render json: @playlist
  #   else
  #     render json: ['Playlist not found'], status: 400
  #   end
  # end

  
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
