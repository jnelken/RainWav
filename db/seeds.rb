# User.destroy_all
# Track.destroy_all
# Genre.destroy_all

j = User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop",
    username: "Callisto",
    bio: "Dj from Jupiter's moon",
    avatar: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/callisto_avatar.jpg?X-Amz-Date=20151126T041344Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=8c6ea4b91527d605f0513caffd30848f38aec5539050759ed046e4afa387f7ab&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
    cover: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/callisto_cover.jpg?X-Amz-Date=20151126T041403Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=f652926b8f6b47a4e4cf8601e6890fd995a428b4bcef2139819a271d3b096c2b&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})

q = User.create({
  username: "Dew",
  email: "dew@rainwav.com",
  password: "abc123",
  bio: "💧🌊",
  avatar: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/dew_avatar.png?X-Amz-Date=20151126T041425Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=9505f38abb2f3e0ecd685d1faf6acb04a6371edb3af4231d6c6b35d2e292bfbf&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  cover: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/dew_cover.png?X-Amz-Date=20151126T041444Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=06f1abfb8a7776bc8a9e42224e4c400a42df1ea560b32f822af2539186f13e05&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})

mc = User.create({
  email: "mr@carmack.com",
  password: "qwertyuiop",
  username: "Mr. Carmack",
  bio: "SF >> LA",
  avatar: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/carmack_avatar.png?X-Amz-Date=20151126T040026Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=34d10f5b95e4a9e904377ee122e9fafccbce3c894a2b959113c981881d59d3d5&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  cover: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/background.jpg?X-Amz-Date=20151126T035757Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=260994f1770f8db5dc8756c157a5792a2315c157faacfe8a9ea9cdd529ca3068&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})



#1
space = Genre.create({
  genre: "space"
})
#2
hiphop = Genre.create({
  genre: "hiphop"
})

trap = Genre.create({
  genre: "trap"
})

house = Genre.create({
  genre: "house"
})

rnb = Genre.create({
  genre: "RnB"
})



Track.create({
  title: "Eclipse",
  genre_id: space.id,
  description: "Space track!",
  user_id: j.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Callisto+-+Eclipse+(Original+Mix).mp3?X-Amz-Date=20151126T034017Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=f7a25982aa02bf8e0f193e704d915205c46b9f3b1306e150b84ebf3ba06bd450&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/track_images/callisto_track_eclipse.jpg?X-Amz-Date=20151126T035101Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=34b857c6355a226eb6a352221546adab28ee02645c6efbd8c65d5bbb1cc2515f&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})
Track.create({
  title: "Satellite",
  genre_id: house.id,
  description: "From way out there",
  user_id: j.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Satellite.mp3?X-Amz-Date=20151126T035414Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=9165f34f4e622132a25cffef7b6207062ed9a51e91eba985475e3441db17c113&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/track_images/callisto_track_satellite.png?X-Amz-Date=20151126T035239Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=e7c22f6995d88645de7486e09ef12692154fde675fae33e87d389d1ecdad4df7&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Womp",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/womp.mp3?X-Amz-Date=20151126T034335Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=5005aa507508736c7b43482392280ee8ed9a8f0c1857a12f3ff291b456972b0f&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Warrior (ft Salva, Oski)",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/warrior+ft.+salva%2C+oski.mp3?X-Amz-Date=20151126T034543Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=e6c880beb5b997455aa3058473fab8d61761dc3ad9f73a03d4b04a4c4848187b&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Ugh",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/ugh.mp3?X-Amz-Date=20151126T034653Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=46e1e27d217d7feaca1135390c9f5b9df80b1c217d0bf86021faeb168438804b&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Solutions (ft. Donnis)",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/solutions+ft.+Donnis.mp3?X-Amz-Date=20151126T034719Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=63960aac23f9289aaf36e4b2eabb2353acd6144007c5c1a41fd0bfc8e147eeed&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Trophies (Remix)",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Trophies+(mr.+carmack+remix).mp3?X-Amz-Date=20151126T034801Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=ac0c4627d61dd4bab1279ace5340a6a60d66329ddb28605be0286f38a5b844d1&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})

Track.create({
  title: "Summer (Remix)",
  genre_id: trap.id,
  description: "off of the red EP",
  user_id: mc.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Summer+(mr.+carmack+remix).mp3?X-Amz-Date=20151126T035632Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=391fa8a268977039314c3a26ee3d6cbed8900598d182367773fdc5abd4cb877f&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D'),
  image: File.open('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg?X-Amz-Date=20151126T034934Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=976d32886ef3a63358d45ba2807827429ed30491add10989555e3fd5da6bb3ac&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')

})



tm = User.create({
  username: "Taylor McFerrin",
  email: "taylor@mcferrin.com",
  password: "qwertyuiop",
  bio: "I make interesting music that everyone can listen to."
})

Track.create({
  title: "HipHopper",
  genre_id: space.id,
  description: "Friend's track",
  user_id: tm.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Taylor+McFerrin+-+Stepps.mp3?X-Amz-Date=20151126T040351Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=c68fb043cabbf643bc1b1423abe663e38d6ffbe79b7b962708cc161c8057c931&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})



tl = User.create({
  username: "Tory Lanez",
  email: "tory@lanez.com",
  password: "qwertyuiop",
  bio: "Dimeloooho!"
})

Track.create({
  title: "Dimelo (prod. by Snakehips)",
  genre_id: rnb.id,
  description: "Sing it out loud with me, baby",
  user_id: tl.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Dimelo+(Prod+By+Snakehips).mp3?X-Amz-Date=20151126T040659Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=6c8d9ed630c5f7417e418cb76faffcec29807fc3d669784981799a310c71bc6b&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})



mbr = User.create({
  username: "3mbr",
  email: "ember@rainwav.com",
  password: "qwertyuiop",
  bio: "LA all day"
})

Track.create({
  title: "Cassie - Me and U (3mbr Remix)",
  genre_id: house.id,
  description: "It's just me n U, now, I've been waiting...",
  user_id: mbr.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/Cassie+-+Me+%26+U+(3MBR+Remix).mp3?X-Amz-Date=20151126T040852Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=e958bdca0dba02f1d444482e0cc45a3604b3478ad3348d03d904c1e7589b9ccf&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})



travis = User.create({
  username: "Travis Scott",
  email: "travis@scott.com",
  password: "qwertyuiop",
  bio: "So young, so pretty"
})

Track.create({
  title: "Antidote",
  genre_id: hiphop.id,
  description: "",
  user_id: travis.id,
  audio: File.open('https://s3.amazonaws.com/rainwav-seeds/track_audio/09+Antidote.mp3?X-Amz-Date=20151126T041130Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=9379b833c11db5fd3f3097c8ca5e40b0bd6ba21af8921ab03b50db5eeb1a5744&X-Amz-Credential=ASIAINL3RNH33YEANSWA/20151126/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEFUakALSNtIOYDXj1yrg/Xv62awmQi9iMNaCzFTDc1JieuWRTAItsRGmgacvZPXvMpqZmbuGzYcv%2BzkUb26%2B0Stv3b/JH2%2BTM6nEeZhW9tUz/NpbNZtCjn8BxBdCrvHeGJa3KJNQFqEeamN0mHd00006fiRzU7%2Ba22OxuO2a5nEKOwHkM7R%2Bf0tXK/fbcV%2Bf2PWAiRAGq6d5pEy9RN33A/HU9osYuD260Rf9sUzOzh5kNyLGm0Mppi1f5aUhjoEGx7VAOLypnW4Sc7%2B%2BbV6la3joVpkEUpADUaEpPJz9lJvqE6t0W/JV4kpUy9S8lOPYIF28GPwAd7te3g2oKSJ72BevTVqxsarAeqONBzbbO46ed8qARCC5/NmyBQ%3D%3D')
})
