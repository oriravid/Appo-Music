class Api::ArtistsController < ApplicationController
  def show
    @artist = selected_artist
  end
  
  private

  def selected_artist
    Artist.find(params[:id])
  end
  
  def artist_params
    params.require(:artist).permit(:id)
  end
end
