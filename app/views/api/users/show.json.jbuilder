json.extract! @user,
  :id,
  :email,
  :username,
  :bio,
  :created_at,
  :updated_at,
  :avatar,
  :cover,
  :plays,
  :tracks

# json.banner asset_path(@user.cover.url(:large))
