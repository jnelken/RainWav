# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({
  email: "qwertyuiop@qwertyuiop.com",
  password: "qwertyuiop"
  })

  User.create({
    email: "jnelks@gmail.com",
    password: "qwertyuiop"
  })

  Track.create({
    title: "Cool",
    genre: "cool",
    audio_url: "http://freesound.org/data/previews/210/210895_1015240-lq.mp3"
    })
