json.tracks do
    @playlist.tracks.each_with_index do |track, index|
        json.set! track.id do
            json.extract! track, :id, :album_id, :title, :play_count, :url, :duration
            json.track_number index
        end
    end
end

json.albums do
    @playlist.albums.uniq.each do |album|
        json.set! album.id do
            json.extract! album, :id, :artist_id, :url
        end
    end
end

json.artists do
    @playlist.artists.uniq.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
        end
    end
end

