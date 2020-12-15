class Api::TracksController < ApplicationController
  def index
    if params[:request_type]
      @current_user = current_user()
      @tracks = @current_user.saved_tracks.where(album_id: params[:album_id])
    else
      @tracks = Track.where(album_id: params[:album_id])
    end
  end

  def update
    @track = selected_track
    new_play_count = @track.play_count + 1

    if @track.update(play_count: new_play_count)
        render json: @track
    end
  end

  # ADD AND REMOVE FROM PLAYLIST

  def create
    @playlist_track = PlaylistTrack.new(playlist_id: params[:playlist_id], track_id: params[:track_id])
    if @playlist_track.save
      render json: params[:track_id]
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_track = PlaylistTrack.find_by(playlist_id: params[:playlist_id], track_id: params[:track_id])
    if @playlist_track.destroy
      render json: @playlist_track.track_id
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end
  
  private

  def selected_track
    Track.find(params[:id])
  end
  
  def playlist_params
    params.require(:track).permit(:id, :album_id)
  end
end
