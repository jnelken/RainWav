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
  description: "Space track!",
  user_id: j.id
})

Track.create({
  title: "Boom Bap",
  genre_id: hiphop.id,
  description: "Normal track from Earth",
  user_id: j.id
})

Track.create({
  title: "HipHopper",
  genre_id: hiphop.id,
  description: "Friend's track",
  user_id: q.id
})
