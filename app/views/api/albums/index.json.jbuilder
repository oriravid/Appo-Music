json.albums do 
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :artist_id, :title, :release_date, :url
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
