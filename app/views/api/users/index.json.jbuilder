json.array! @users do |user|
  json.extract! user,
  :id,
  :email,
  :username,
  :bio,
  :created_at,
  :updated_at,
  :avatar,
  :cover,

  :plays,
  :tracks,
  :reposts,
  :followers,
  :followees,
  :following,
  :feed_tracks
end
