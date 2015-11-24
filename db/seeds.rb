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

Track.create({
  title: "Eclipse",
  genre_id: space.id,
  description: "Space track!",
  user_id: j.id,
  audio: File.open('/Users/josx/Music/Ableton/Originals/j3ayx/Unreleased/Firefly/Firefly.wav')
})

Track.create({
  title: "Boom Bap",
  genre_id: hiphop.id,
  description: "Normal track from Earth",
  user_id: j.id,
  audio: File.open('/Users/josx/Music/Ableton/Originals/j3ayx/Unreleased/Terminator/J3ayx - Terminator ft. José (demo).wav')
})
Track.create({
  title: "HipHopper",
  genre_id: hiphop.id,
  description: "Friend's track",
  user_id: q.id,
  audio: File.open('/Users/josx/Music/Ableton/Originals/j3ayx/Unreleased/Firefly/J3ayx New Hiphop demo #2.wav')
})
