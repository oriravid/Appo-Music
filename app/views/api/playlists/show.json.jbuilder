json.tracks do
    @playlist.playlist_tracks.each_with_index do |pt, index|
        json.set! pt.track.id do
            json.extract! pt.track, :id, :album_id, :title, :play_count, :url, :duration
            json.track_number index + 1
        end
    end
end

json.albums do
    @playlist.albums.uniq.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :url
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

