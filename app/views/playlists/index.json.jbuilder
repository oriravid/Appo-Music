@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist :id, :user_id, :title
  end
end
