# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {username: "Demo", password: "J*Bx.Y86!R"},
    {username: "ori_the_creator", password: "imobdeep"}
])

Artist.create([
    {name: "Mac Miller", 
        bio: "Though he broke through as a brash teenager, Mac Miller evolved into one of the more thoughtful and surprising rappers of the 2010s. A Pittsburgh native, Miller (born Malcolm McCormick in 1992) entered the mainstream with 2011\u2019s playful, party-ready Blue Slide Park, only the second independently distributed debut to top the Billboard 200. He grew quickly: Few artists cover as much ground between albums as Miller did from Blue Slide Park to 2016\u2019s The Divine Feminine, which saw him develop into a vocalist capable of duetting with Ariana Grande. Searching, jazzy, even philosophical, his music\u2014often self-produced under the name Larry Fisherman\u2014came to split the difference between popular appeal and creative ambition, uniting collaborators at both ends of the spectrum, from Snoop Dogg to Flying Lotus. Even when the subject matter grew dark\u2014Miller dealt openly with substance abuse before his death in September 2018 at age 26\u2014he was candid and personable about channeling his struggles into relatable art. \u201CAs long as I'm being honest first and foremost with myself, that allows me to be honest in the music,\u201D Miller told Beats 1 host Zane Lowe around the release of his fifth and final album, Swimming. \u201CYou're building a world, so you have to kind of be the architect of what you're making and not think about what the current world is doing. Because I'm just trying to make music for people who have similar thoughts or feelings as me.\u201D", 
        url: "www.google.com"},
    {name: "John Mayer", 
        bio: "Singer\/songwriter, bluesman, pop star, guitar hero, R&B crooner\u2014John Mayer is a bundle of personalities that are nearly impossible to reconcile. His initial run of albums, beginning with his 2003 debut, Room for Squares, and capping with Battle Studies in 2009, established him as a chart-topping heartthrob. Deft fretwork is there, certainly, yet it\u2019s the husky whisper, sexual tension, and effortless hooks that make him one of the preeminent artists of the 2000s. Onstage, it\u2019s a different story, however. Mayer\u2019s tightly crafted hits loosen up and stretch out, revealing his roots in classic rock, soul, and blues. It\u2019s this John Mayer who takes center stage in the 2010s. Pop still makes appearances, but on Born and Raised and Paradise Valley, he goes all in, serving up pedal-steel-inflected ballads haunted by hippie California. In this context, Mayer teaming up with surviving members of the Grateful Dead to form Dead & Company in 2015 makes total sense. Playing the role of Jerry Garcia opposite Bob Weir, he transforms into a guitar guru, weaving psychedelic tapestries night after night for Deadheads across the United States. But just as fans get used to an older and wiser Mayer seemingly easing into the jam-band lifestyle, he doubles back and drops the 2018 single \u201CNew Light,\u201D a slice of purring, disco-inspired pop that could be credited to a neo-soul star barely out of their teens.", 
        url: "www.google.com"},

])

Album.create([
    {artist_id: 1, 
        title: "Swimming", 
        genre: "Hip-Hop/Rap", 
        release_date: "08/03/2018", 
        url: "www.google.com", 
        description: "On \u201CHurt Feelings,\u201D the second song from his fifth studio album, Swimming, Mac Miller raps, \u201CI paid the cost to see apostrophes, that means it\u2019s mine\/Keep to myself, taking my time.\u201D The Pittsburgh-born MC has always been clever; on Swimming, he's also direct\u2014particularly about the distance he\u2019s kept from the public eye following a high-profile breakup and other troubles. But this isn't a breakup album; Miller says Swimming is a more complete picture of his life. \u201CI'm just talking about things that I'm proud of myself for, things I'm afraid of, or things that are just thoughts and emotions,\u201D he told Beats 1 host Zane Lowe. \u201CAnd I'm like, 'Why is this interesting?'\u201D That same curiosity is freeing for Miller, who leans further into the singing he displayed on The Divine Feminine. Production-wise, he\u2019s riding ultra-funky basslines courtesy of Thundercat and an altogether jazzy and danceable set overseen by producer Jon Brion (Kanye West, Fiona Apple)."},
        
    {artist_id: 2, 
        title: "Continuum", 
        genre: "Singer/Songwriter", 
        release_date: "09/12/2006", 
        url: "www.google.com",
        description: "After throwing fans of his campfire serenades off guard with the jam-heavy live album Try!, Continuum confirms John Mayer\u2019s transformation into a 21st-century soul man with serious blues-rock chops. And for Mayer, that shift means more than just casting his songs in a gospel glow, but also speaking to political unrest atop the laidback shuffle of \u201CWaiting on the World to Change.\u201D Ultimately, the growth Mayer exhibits here can be gauged not just by his shred-tastic cover of Hendrix\u2019s \u201CBold as Love,\u201D but by the fact he answers it with \u201CDreaming with a Broken Heart,\u201D a lighter-waving anthem to call his own."},
])

Track.create([
    {album_id: 1, title: "Come Back to Earth", track_number: 1, url: "www.google.com"},
    {album_id: 1, title: "Hurt Feelings", track_number: 2, url: "www.google.com"},
    {album_id: 1, title: "What's the Use?", track_number: 3, url: "www.google.com"},
    {album_id: 1, title: "Perfecto", track_number: 4, url: "www.google.com"},
    {album_id: 1, title: "Self Care", track_number: 5, url: "www.google.com"},
    {album_id: 1, title: "Wings", track_number: 6, url: "www.google.com"},
    {album_id: 1, title: "Ladders", track_number: 7, url: "www.google.com"},
    {album_id: 1, title: "Small Worlds", track_number: 8, url: "www.google.com"},
    {album_id: 1, title: "Conversation, Pt. 1", track_number: 9, url: "www.google.com"},
    {album_id: 1, title: "Dunno", track_number: 10, url: "www.google.com"},
    {album_id: 1, title: "Jet Fuel", track_number: 11, url: "www.google.com"},
    {album_id: 1, title: "2009", track_number: 12, url: "www.google.com"},
    {album_id: 1, title: "So It Goes", track_number: 13, url: "www.google.com"},

    {album_id: 2, title: "Waiting On the World to Change", track_number: 1, url: "www.google.com"},
    {album_id: 2, title: "I Don't Trust Myself (With Loving You)", track_number: 2, url: "www.google.com"},
    {album_id: 2, title: "Belief", track_number: 3, url: "www.google.com"},
    {album_id: 2, title: "Gravity", track_number: 4, url: "www.google.com"},
    {album_id: 2, title: "The Heart of Life", track_number: 5, url: "www.google.com"},
    {album_id: 2, title: "Vultures", track_number: 6, url: "www.google.com"},
    {album_id: 2, title: "Stop This Train", track_number: 7, url: "www.google.com"},
    {album_id: 2, title: "Slow Dancing In a Burning Room", track_number: 8, url: "www.google.com"},
    {album_id: 2, title: "Bold As Love", track_number: 9, url: "www.google.com"},
    {album_id: 2, title: "Dreaming With a Broken Heart", track_number: 10, url: "www.google.com"},
    {album_id: 2, title: "In Repair", track_number: 11, url: "www.google.com"},
    {album_id: 2, title: "I'm Gonna Find Another You", track_number: 12, url: "www.google.com"},
])

Playlist.create([
    {user_id: 1, title: "Beach bash 2015"},
    {user_id: 1, title: "Graduation"},
    {user_id: 1, title: "House party"},
    {user_id: 1, title: "Rap Slapz"},
])

PlaylistTrack.create([
    {playlist_id: 1, track_id: 1},
    {playlist_id: 1, track_id: 2},
    {playlist_id: 1, track_id: 3},
    {playlist_id: 2, track_id: 3},
    {playlist_id: 2, track_id: 4},
    {playlist_id: 2, track_id: 5},
])

UserSave.create([
    {user_id: 1, track_id: 11},
    {user_id: 1, track_id: 15},
    {user_id: 1, track_id: 4},  
])