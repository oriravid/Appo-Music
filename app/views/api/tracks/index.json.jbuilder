@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :album_id, :title, :track_number, :play_count, :url, :duration
    end
end

