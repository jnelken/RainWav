  json.array! @tracks do |track|
    json.extract! track, :id, :title, :genre, :user_id, :audio_url, :image_url
end
