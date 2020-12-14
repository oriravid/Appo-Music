json.albums do 
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :artist_id, :title, :release_date, :url
            json.saved_at album.user_saves.where(user_id: @current_user.id)
                                .order(created_at: :desc)
                                .limit(1).first
                                .created_at.to_s.slice(0,19)
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
