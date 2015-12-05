User.destroy_all
Track.destroy_all
Genre.destroy_all
Follow.destroy_all
Repost.destroy_all


# Demo user

q = User.create({
  username: "Dew",
  email: "dew@rainwav.com",
  password: "abc123",
  bio: "💧🌊",
  avatar: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/dew_avatar.png'),
  cover: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/dew_aa_cover.png")
})



# Genres

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



#  Users and tracks

j = User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop",
    username: "Callisto",
    bio: "Dj from Jupiter's moon",
    avatar: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/callisto_avatar.jpg'),
    cover: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/callisto_cover.jpg'),
})


Track.create({
  title: "Eclipse",
  genre_id: space.id,
  description: "Space track!",
  plays: rand(4)**rand(4),
  user_id: j.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Callisto+-+Eclipse+(Original+Mix).mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_images/callisto_track_eclipse.jpg'),

})
Track.create({
  title: "Satellite",
  genre_id: house.id,
  description: "From way out there",
  plays: rand(4)**rand(4),
  user_id: j.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Satellite.mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_images/callisto_track_satellite.png'),

})

# Track.create({
#   title: "Sai Das Trevas (Preview)",
#   genre_id: house.id,
#   description: "new remix I'm working on!",
#   plays: rand(4)**rand(4),
#   user_id: j.id,
#   audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Sai.mp3'),
#   image: URI.parse('https://redmp3.me/cover/367419-460x460/a-piece-of-my-heart.jpg'),
#
# })


# #######################
mc = User.create({
  email: "mr@carmack.com",
  password: "qwertyuiop",
  username: "Mr Carmack",
  bio: "SF >> LA",
  avatar: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/carmack_avatar.png'),
  cover: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/background.jpg'),
})


Track.create({
  title: "Womp",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/womp.mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

Track.create({
  title: "Warrior (ft Salva, Oski)",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/warrior+ft.+salva%2C+oski.mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

Track.create({
  title: "Ugh",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/ugh.mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

Track.create({
  title: "Solutions (ft. Donnis)",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/solutions+ft.+Donnis.mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

Track.create({
  title: "Trophies (Remix)",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Trophies+(mr.+carmack+remix).mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

Track.create({
  title: "Summer (Remix)",
  genre_id: trap.id,
  description: "off of the red EP",
  plays: rand(4)**rand(4),
  user_id: mc.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Summer+(mr.+carmack+remix).mp3'),
  image: URI.parse('https://s3.amazonaws.com/rainwav-seeds/user_images/cover.jpg'),

})

##################################################

tm = User.create({
  username: "Taylor McFerrin",
  email: "taylor@mcferrin.com",
  password: "qwertyuiop",
  bio: "I make interesting music that everyone can listen to."
})

Track.create({
  title: "Stepps",
  genre_id: space.id,
  description: "Friend's track",
  plays: rand(4)**rand(4),
  user_id: tm.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Taylor+McFerrin+-+Stepps.mp3'),
})

# #####################################################

tl = User.create({
  username: "Tory Lanez",
  email: "tory@lanez.com",
  password: "qwertyuiop",
  bio: "Dimeloooho!",
  avatar: URI.parse("https://s3.amazonaws.com/hiphopdx-production/2014/05/Tory_Lanez-304-300x300.jpg"),
  cover: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/tory_cover.jpg")
})

Track.create({
  title: "Dimelo (prod. by Snakehips)",
  genre_id: rnb.id,
  description: "Sing it out loud with me, baby",
  plays: rand(4)**rand(4),
  user_id: tl.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Dimelo+(Prod+By+Snakehips).mp3'),
})

# ###############################################

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
  plays: rand(4)**rand(4),
  user_id: mbr.id,
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Cassie+-+Me+%26+U+(3MBR+Remix).mp3'),
})

# ################################################

travis = User.create({
  username: "Travis Scott",
  email: "travis@scott.com",
  password: "qwertyuiop",
  bio: "So young, so pretty",
  cover: URI.parse("https://i.ytimg.com/vi/eRg7Yv9Z15M/maxresdefault.jpg"),
  avatar: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/travis_avatar.jpg")
})

Track.create({
  title: "Antidote",
  genre_id: hiphop.id,
  description: "",
  plays: rand(4)**rand(4),
  user_id: travis.id,
  image: URI.parse("https://upload.wikimedia.org/wikipedia/en/7/74/Rodeoalbumdeluxe.jpg"),
  audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/09+Antidote.mp3'),
})

# ##################################################

mm = User.create({
  username: "Morizio",
  email: "Morizio@rainwav.com",
  password: "Morizio",
  bio: "i love this site yo",
  avatar: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/morizio.png"),
  cover: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/moizio_cover.jpg")
  })

  Track.create({
    title: "Magnets",
    genre_id: hiphop.id,
    description: "",
    plays: rand(4)**rand(4),
    user_id: mm.id,
    image: URI.parse("https://s3.amazonaws.com/rainwav-seeds/user_images/morizio.png"),
    audio: URI.parse('https://s3.amazonaws.com/rainwav-seeds/track_audio/Morizio+-+Magnets.mp3'),
  })
