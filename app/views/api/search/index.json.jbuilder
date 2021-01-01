json.artists do
    json.array!(@artists) do |artist|
        json.extract! artist, :id, :name, :url
    end
end

json.albums do 
    json.array!(@albums) do |album|
        json.extract! album, :id, :title, :url
    end
end

json.tracks do 
    json.array!(@tracks) do |track|
        json.extract! track, :id, :title, :album_id
        json.url track.album.url
    end
end