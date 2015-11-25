  json.array! @genres do |genre|
    json.extract! genre, :id, :genre
end
