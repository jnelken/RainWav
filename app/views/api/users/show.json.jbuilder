json.extract! @user, :id, :email, :bio, :username,
:avatar, :cover, :created_at, :updated_at

# json.banner asset_path(@user.cover.url(:large))
