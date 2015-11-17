@tracks.each do |track|
  json.extract! track, :id, :title, :genre, :audio_url, :image_url;
end
