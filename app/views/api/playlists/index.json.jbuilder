@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title
    json.created_at playlist.created_at.to_s.slice(0,10)
  end
end
