json.array! @follows do |follow|
  json.extract! follow,
    :id,
    :follower_id,
    :following_id,
    :status
end
