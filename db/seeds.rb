User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop"
})

User.create({
  email: "qwertyuiop@qwertyuiop.com",
  password: "qwertyuiop"
})


Track.create({
  title: "Cool",
  genre: "cool",
  audio_url: "http://freesound.org/data/previews/210/210895_1015240-lq.mp3",
  artist_id: 1
})

Track.create({
  title: "Not Cool",
  genre: "uncool",
  audio_url: "http://freesound.org/data/previews/210/21095_1015240-lq.mp3",
  artist_id: 1
})

Track.create({
  title: "Another",
  genre: "friend",
  audio_url: "http://freesound.org/data/previews/210/210895_10150-lq.mp3",
  artist_id: 2
})
