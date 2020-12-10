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
        url: "https://dazedimg-dazedgroup.netdna-ssl.com/800/azure/dazed-prod/1240/7/1247898.jpg"},
    {name: "John Mayer", 
        bio: "Singer\/songwriter, bluesman, pop star, guitar hero, R&B crooner\u2014John Mayer is a bundle of personalities that are nearly impossible to reconcile. His initial run of albums, beginning with his 2003 debut, Room for Squares, and capping with Battle Studies in 2009, established him as a chart-topping heartthrob. Deft fretwork is there, certainly, yet it\u2019s the husky whisper, sexual tension, and effortless hooks that make him one of the preeminent artists of the 2000s. Onstage, it\u2019s a different story, however. Mayer\u2019s tightly crafted hits loosen up and stretch out, revealing his roots in classic rock, soul, and blues. It\u2019s this John Mayer who takes center stage in the 2010s. Pop still makes appearances, but on Born and Raised and Paradise Valley, he goes all in, serving up pedal-steel-inflected ballads haunted by hippie California. In this context, Mayer teaming up with surviving members of the Grateful Dead to form Dead & Company in 2015 makes total sense. Playing the role of Jerry Garcia opposite Bob Weir, he transforms into a guitar guru, weaving psychedelic tapestries night after night for Deadheads across the United States. But just as fans get used to an older and wiser Mayer seemingly easing into the jam-band lifestyle, he doubles back and drops the 2018 single \u201CNew Light,\u201D a slice of purring, disco-inspired pop that could be credited to a neo-soul star barely out of their teens.", 
        url: "https://www.chicagotribune.com/resizer/j-fGM8dJGpI8d2zdg7nL8ejzGks=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/UBHM4B3QZ5BCZLPMCWTDFG6K7I.jpg"},

])

Album.create([
    {artist_id: 1, 
        title: "Swimming", 
        genre: "Hip-Hop/Rap", 
        release_date: "08/03/2018", 
        url: "https://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_600/Mac%20Miller_Swimming.jpg", 
        description: "On \u201CHurt Feelings,\u201D the second song from his fifth studio album, Swimming, Mac Miller raps, \u201CI paid the cost to see apostrophes, that means it\u2019s mine\/Keep to myself, taking my time.\u201D The Pittsburgh-born MC has always been clever; on Swimming, he's also direct\u2014particularly about the distance he\u2019s kept from the public eye following a high-profile breakup and other troubles. But this isn't a breakup album; Miller says Swimming is a more complete picture of his life. \u201CI'm just talking about things that I'm proud of myself for, things I'm afraid of, or things that are just thoughts and emotions,\u201D he told Beats 1 host Zane Lowe. \u201CAnd I'm like, 'Why is this interesting?'\u201D That same curiosity is freeing for Miller, who leans further into the singing he displayed on The Divine Feminine. Production-wise, he\u2019s riding ultra-funky basslines courtesy of Thundercat and an altogether jazzy and danceable set overseen by producer Jon Brion (Kanye West, Fiona Apple)."},
        
    {artist_id: 2, 
        title: "Continuum", 
        genre: "Singer/Songwriter", 
        release_date: "09/12/2006", 
        url: "https://img.discogs.com/LusXFDogak-8FTHA-nGoopKNwBU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2050807-1459316495-6436.jpeg.jpg",
        description: "After throwing fans of his campfire serenades off guard with the jam-heavy live album Try!, Continuum confirms John Mayer\u2019s transformation into a 21st-century soul man with serious blues-rock chops. And for Mayer, that shift means more than just casting his songs in a gospel glow, but also speaking to political unrest atop the laidback shuffle of \u201CWaiting on the World to Change.\u201D Ultimately, the growth Mayer exhibits here can be gauged not just by his shred-tastic cover of Hendrix\u2019s \u201CBold as Love,\u201D but by the fact he answers it with \u201CDreaming with a Broken Heart,\u201D a lighter-waving anthem to call his own."},
])

Track.create([
    {album_id: 1, track_number: 1, duration: "2:41", title: "Come Back to Earth", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 2, duration: "4:05", title: "Hurt Feelings", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 3, duration: "4:48", title: "What's the Use?", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 4, duration: "3:35", title: "Perfecto", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 5, duration: "5:45", title: "Self Care", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 6, duration: "4:10", title: "Wings", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 7, duration: "4:47", title: "Ladders", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 8, duration: "4:31", title: "Small Worlds", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 9, duration: "3:30", title: "Conversation, Pt. 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 10, duration: "3:57", title: "Dunno", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 11, duration: "5:45", title: "Jet Fuel", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 12, duration: "5:48", title: "2009", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
    {album_id: 1, track_number: 13, duration: "4:12", title: "So It Goes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},

    {album_id: 2, track_number: 1, duration: "3:20", title: "Waiting On the World to Change", url: "/assets/music/01.wav"},
    {album_id: 2, track_number: 2, duration: "4:52", title: "I Don't Trust Myself (With Loving You)", url: "/assets/music/02.mp3"},
    {album_id: 2, track_number: 3, duration: "4:02", title: "Belief", url: "/assets/music/03.mp3"},
    {album_id: 2, track_number: 4, duration: "4:05", title: "Gravity", url: "/assets/music/04.mp3"},
    {album_id: 2, track_number: 5, duration: "3:19", title: "The Heart of Life", url: "/assets/music/05.mp3"},
    {album_id: 2, track_number: 6, duration: "4:11", title: "Vultures", url: "/assets/music/06.mp3"},
    {album_id: 2, track_number: 7, duration: "4:45", title: "Stop This Train", url: "/assets/music/07.mp3"},
    {album_id: 2, track_number: 8, duration: "4:01", title: "Slow Dancing In a Burning Room", url: "/assets/music/08.mp3"},
    {album_id: 2, track_number: 9, duration: "4:18", title: "Bold As Love", url: "/assets/music/09.mp3"},
    {album_id: 2, track_number: 10, duration: "4:07", title: "Dreaming With a Broken Heart", url: "/assets/music/10.mp3"},
    {album_id: 2, track_number: 11, duration: "6:09", title: "In Repair", url: "/assets/music/11.mp3"},
    {album_id: 2, track_number: 12, duration: "2:42", title: "I'm Gonna Find Another You", url: "/assets/music/01.wav"},
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
    # {user_id: 1, track_id: 15},
    {user_id: 1, track_id: 4},  
])