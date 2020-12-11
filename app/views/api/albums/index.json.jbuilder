json.albums do 
    @albums.each do |album|

        album_plays = 0
        album.tracks.each do |track|
            album_plays += track.play_count
        end

        json.set! album.id do
            json.extract! album, :id, :artist_id, :title, :release_date, :url
            json.play_count album_plays
        end
    end
end

json.artists do 
    @albums.each do |album|
        json.set! album.artist.id do
            json.extract! album.artist, :id, :name
        end
    end
end

json.tracks do 
    @albums.each do |album|
        album.tracks.each do |track|
            json.set! track.id do
                json.extract! track, :id, :album_id, :title, :track_number, :play_count, :url, :duration
            end
        end
    end
end
