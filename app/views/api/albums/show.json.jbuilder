json.album do 

    album_plays = 0
    @album.tracks.each do |track|
        album_plays += track.play_count
    end

    json.extract! @album, :id, :artist_id, :title, :genre, :release_date, :description, :url
    json.play_count album_plays
end

json.artist do
    json.extract! @album.artist, :id, :name
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :album_id, :title, :track_number, :play_count, :url, :duration
        end
    end
end
