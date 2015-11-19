  json.array! @tracks do |track|
    json.extract! track, :id, :title, :genre_id, :user_id, :audio_url, :image
end
