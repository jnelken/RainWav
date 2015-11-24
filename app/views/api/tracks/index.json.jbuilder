  json.array! @tracks do |track|
    json.extract! track,
                        :id, 
                        :title,
                        :genre_id,
                        :user_id,
                        :audio,
                        :image
end
