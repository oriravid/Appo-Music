class Api::SearchController < ApplicationController
  def index
    @artists = Artist.where("name ILIKE ?", "%" + params[:searchQuery] + "%").limit(3)
    @albums = Album.where("title ILIKE ?", "%" + params[:searchQuery] + "%").limit(3)
    @tracks = Track.order(play_count: :desc).where("title ILIKE ?", "%" + params[:searchQuery] + "%").limit(3)
  end
end
