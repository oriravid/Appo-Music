class Api::TracksController < ApplicationController
  def index
    @tracks = Track.where(album_id: params[:album_id])
  end

  def update
    @track = selected_track
    new_play_count = @track.play_count + 1

    if @track.update(play_count: new_play_count)
        render json: @track
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
