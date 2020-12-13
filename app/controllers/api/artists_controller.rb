class Api::ArtistsController < ApplicationController
  def show
    @artist = selected_artist
    @top_tracks = @artist.tracks.order(play_count: :desc).limit(6)
  end
  
  private

  def selected_artist
    Artist.find(params[:id])
  end
  
  def artist_params
    params.require(:artist).permit(:id)
  end
end
