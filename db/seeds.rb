User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop",
    username: "Callisto",
    bio: "Dj from Jupiter's moon"
})

User.create({
  email: "qwertyuiop@qwertyuiop.com",
  password: "qwertyuiop",
  username: "qwertyuiop",
  bio: "qwertyuiop qwertyuiop!"
})


Track.create({
  title: "Eclipse",
  genre: "space",
  audio_url: "http://freesound.org/data/previews/210/210895_1015240-lq.mp3",
  image_url: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Space track!",
  user_id: 1
})

Track.create({
  title: "Track B",
  genre: "earth",
  audio_url: "http://freesound.org/data/previews/210/21095_1015240-lq.mp3",
  image_url: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Normal track from Earth",
  user_id: 1
})

Track.create({
  title: "HipHopper",
  genre: "friend",
  audio_url: "http://freesound.org/data/previews/210/210895_10150-lq.mp3",
  image_url: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Friend's track",
  user_id: 2
})
