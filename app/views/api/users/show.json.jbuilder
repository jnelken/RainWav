json.extract! @user,
  :id,
  :email,
  :username,
  :bio,
  :created_at,
  :updated_at,

  :plays,
  :tracks,
  :reposts,
  :followers,
  :followees

  json.avatar asset_path(@user.avatar.url(:large))
  json.cover asset_path(@user.cover.url(:large))
