json.artist do 
    json.extract! @artist, :id, :name, :bio, :url
end

json.albums do
    @artist.albums.each do |album|
        album_plays = 0
        album.tracks.each do |track|
            album_plays += track.play_count
        end

        json.set! album.id do
            json.extract! album, :id, :artist_id, :title, :release_date, :url
            json.play_count album_plays
            json.track_count album.tracks.length
        end
    end
end

json.tracks do 
    @top_tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :album_id, :title, :play_count, :url
        end
    end
end
