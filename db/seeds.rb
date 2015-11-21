User.destroy_all
Track.destroy_all
Genre.destroy_all

j = User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop",
    username: "Callisto",
    bio: "Dj from Jupiter's moon"
})

q = User.create({
  email: "qwertyuiop@qwertyuiop.com",
  password: "qwertyuiop",
  username: "qwertyuiop",
  bio: "qwertyuiop qwertyuiop!"
})



#1
space = Genre.create({
  genre: "space"
})

#2
hiphop = Genre.create({
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

Track.create({
  title: "Eclipse",
  genre_id: space.id,
  audio_url: "http://freesound.org/data/previews/210/210895_1015240-lq.mp3",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Space track!",
  user_id: j.id
})

Track.create({
  title: "Boom Bap",
  genre_id: hiphop.id,
  audio_url: "https://dl-web.dropbox.com/get/%2CWstvlns%2C/wstvlns/Potluck%20Ft.%20DoLo%20%26%20Big%20Toof%20%28master%29.mp3?_subject_uid=61823155&w=AAAJm15S2UG5sOr69K9n7WiVmLL012yyTrvvhrn2hMTC_Q",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Normal track from Earth",
  user_id: j.id
})

Track.create({
  title: "HipHopper",
  genre_id: hiphop.id,
  audio_url: "https://dl-web.dropbox.com/get/%2CWstvlns%2C/Kickin%20Rocks%20samples/Kojo%20no%20Tsuki%20%28The%20Moon%20over%20the%20Ruined%20Castle%29.mp3?_subject_uid=61823155&w=AACTdHq6N7sTC319g9GY5uukpohWqQOfQ0miYz3V4reggQ",
  image: "https://cdn1.iconfinder.com/data/icons/music-12/96/CD-2-512.png",
  description: "Friend's track",
  user_id: q.id
})
