# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create( username: "demo", password: "demodemo")
Playlist.create([
    {user_id: 1, title: "Beach bash 2015"},
    {user_id: 1, title: "Graduation"},
    {user_id: 1, title: "House party"},
    {user_id: 1, title: "Rap Slapz"},
])