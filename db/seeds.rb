User.destroy_all
Track.destroy_all
Genre.destroy_all

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
  genre_id: 1,
  audio_url: "http://freesound.org/data/previews/210/210895_1015240-lq.mp3",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Space track!",
  user_id: 1
})

Track.create({
  title: "Boom Bap",
  genre_id: 2,
  audio_url: "http://freesound.org/data/previews/210/21095_1015240-lq.mp3",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Normal track from Earth",
  user_id: 1
})

Track.create({
  title: "HipHopper",
  genre_id: 2,
  audio_url: "http://freesound.org/data/previews/210/210895_10150-lq.mp3",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Friend's track",
  user_id: 2
})

#1
Genre.create({
  genre: "space"
})

#2
Genre.create({
  genre: "hiphop"
})

#3
Genre.create({
  genre: "rock"
})

#4
Genre.create({
  genre: "edm"
})

#5
Genre.create({
  genre: "trap"
})

#6
Genre.create({
  genre: "pop"
})

#7
Genre.create({
  genre: "country"
})

#7
Genre.create({
  genre: "podcast"
})

#7
Genre.create({
  genre: "recording"
})

#7
Genre.create({
  genre: "mix"
})

#8
Genre.create({
  genre: "???"
})
