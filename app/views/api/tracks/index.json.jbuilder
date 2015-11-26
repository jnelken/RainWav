  json.array! @tracks do |track|
    json.extract! track,
      :id,
      :title,
      :description,
      :plays,
      # :genre_id,
      # :user_id,
      :created_at,
      :updated_at,
      :audio,
      :image,

      :user,
      :genre,
      :reposts
end

# make a partial
