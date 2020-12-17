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
    #1 - Mac Miller
    {name: "Mac Miller", 
        bio: "Though he broke through as a brash teenager, Mac Miller evolved into one of the more thoughtful and surprising rappers of the 2010s. A Pittsburgh native, Miller (born Malcolm McCormick in 1992) entered the mainstream with 2011\u2019s playful, party-ready Blue Slide Park, only the second independently distributed debut to top the Billboard 200. He grew quickly: Few artists cover as much ground between albums as Miller did from Blue Slide Park to 2016\u2019s The Divine Feminine, which saw him develop into a vocalist capable of duetting with Ariana Grande. Searching, jazzy, even philosophical, his music\u2014often self-produced under the name Larry Fisherman\u2014came to split the difference between popular appeal and creative ambition, uniting collaborators at both ends of the spectrum, from Snoop Dogg to Flying Lotus. Even when the subject matter grew dark\u2014Miller dealt openly with substance abuse before his death in September 2018 at age 26\u2014he was candid and personable about channeling his struggles into relatable art. \u201CAs long as I'm being honest first and foremost with myself, that allows me to be honest in the music,\u201D Miller told Beats 1 host Zane Lowe around the release of his fifth and final album, Swimming. \u201CYou're building a world, so you have to kind of be the architect of what you're making and not think about what the current world is doing. Because I'm just trying to make music for people who have similar thoughts or feelings as me.\u201D", 
        url: "https://appomusic.com/assets/mm/mm.jpg"},
   
    #2 - John Mayer
    {name: "John Mayer", 
        bio: "Singer\/songwriter, bluesman, pop star, guitar hero, R&B crooner\u2014John Mayer is a bundle of personalities that are nearly impossible to reconcile. His initial run of albums, beginning with his 2003 debut, Room for Squares, and capping with Battle Studies in 2009, established him as a chart-topping heartthrob. Deft fretwork is there, certainly, yet it\u2019s the husky whisper, sexual tension, and effortless hooks that make him one of the preeminent artists of the 2000s. Onstage, it\u2019s a different story, however. Mayer\u2019s tightly crafted hits loosen up and stretch out, revealing his roots in classic rock, soul, and blues. It\u2019s this John Mayer who takes center stage in the 2010s. Pop still makes appearances, but on Born and Raised and Paradise Valley, he goes all in, serving up pedal-steel-inflected ballads haunted by hippie California. In this context, Mayer teaming up with surviving members of the Grateful Dead to form Dead & Company in 2015 makes total sense. Playing the role of Jerry Garcia opposite Bob Weir, he transforms into a guitar guru, weaving psychedelic tapestries night after night for Deadheads across the United States. But just as fans get used to an older and wiser Mayer seemingly easing into the jam-band lifestyle, he doubles back and drops the 2018 single \u201CNew Light,\u201D a slice of purring, disco-inspired pop that could be credited to a neo-soul star barely out of their teens.", 
        url: "https://appomusic.com/assets/jm/jm.jpg"},

    #3 - Chris Stapleton
    {name: "Chris Stapleton", 
        bio: "Born and raised in Kentucky, Chris Stapleton is an American musician who spent years in Nashville as a sought-after songwriter, furnishing songs for numerous artists. Easy to spot due to his signature long hair and prodigious beard, he became a major star in the autumn of 2015 when his debut solo album, Traveller, practically swept the CMAs. Traveller subsequently went platinum and Stapleton followed it up by drawing on his own vast repertoire of songs.", 
        url: "https://appomusic.com/assets/cs/cs.jpg"},

    #4 - YUNGBLUD
    {name: "YUNGBLUD", 
        bio: "The 22-year-old singer, born Dominic Harrison, has risen quickly to become a leader of Gen Z-style pop-punk with his politically inclined lyrics, rap-derived production, and rebellious ethos. Known for his gender-bending style, signature pink socks, and wide, wolf-like grin, Yungblud has built his fanbase the old-fashioned way, through live shows and fan buzz. First came a self-titled EP last year, followed by a debut album, 21st Century Liability, and a string of 2019 singles like \u201C11 Minutes\u201D with Halsey and Travis Barker and \u201COriginal Me\u201D with Imagine Dragons\u2019 Dan Reynolds, which have helped him headline venues across the U.S. and Europe.", 
        url: "https://appomusic.com/assets/yb/yb.jpg"},
])

Album.create([
    #1 - Circles
    {artist_id: 1, 
        title: "Circles (Deluxe)", 
        genre: "Hip-Hop/Rap", 
        release_date: "19/03/2020", 
        url: "https://appomusic.com/assets/mm/cr/cr.jpg", 
        description: "Circles is the sixth and final studio album by American rapper and singer Mac Miller. It was released posthumously on January 17, 2020, by REMember Music and Warner Records, and was being worked on by Miller before his death in September 2018. Production was completed by Jon Brion. Circles was supported by two singles: \"Good News\" and \"Blue World\". The album received widespread acclaim from critics and debuted at number three on the US Billboard 200."},
    
    #2 - Swimming
    {artist_id: 1, 
        title: "Swimming", 
        genre: "Hip-Hop/Rap", 
        release_date: "03/08/2018", 
        url: "https://appomusic.com/assets/mm/sw/sw.jpg", 
        description: "On \u201CHurt Feelings,\u201D the second song from his fifth studio album, Swimming, Mac Miller raps, \u201CI paid the cost to see apostrophes, that means it\u2019s mine\/Keep to myself, taking my time.\u201D The Pittsburgh-born MC has always been clever; on Swimming, he's also direct\u2014particularly about the distance he\u2019s kept from the public eye following a high-profile breakup and other troubles. But this isn't a breakup album; Miller says Swimming is a more complete picture of his life. \u201CI'm just talking about things that I'm proud of myself for, things I'm afraid of, or things that are just thoughts and emotions,\u201D he told Beats 1 host Zane Lowe. \u201CAnd I'm like, 'Why is this interesting?'\u201D That same curiosity is freeing for Miller, who leans further into the singing he displayed on The Divine Feminine. Production-wise, he\u2019s riding ultra-funky basslines courtesy of Thundercat and an altogether jazzy and danceable set overseen by producer Jon Brion (Kanye West, Fiona Apple)."},

    #3 - The Divine Feminine
    {artist_id: 1, 
        title: "The Divine Feminine", 
        genre: "Hip-Hop", 
        release_date: "16/09/2016", 
        url: "https://appomusic.com/assets/mm/df/df.jpg", 
        description: "The boy wonder grows into his musical imagination. Already a nimble rapper, Mac\u2019s cracked-but-sincere croon is as crucial to these songs as his rhyme skills. Infused with the musicality of gospel and R&B, \u201CPlanet God Damn\u201D and \u201CSkin\u201D show a relaxed mind gently unspooling its creative eccentricities."},
    
    #4 - The Search For Everything
    {artist_id: 2, 
        title: "The Search for Everything", 
        genre: "Rock", 
        release_date: "14/04/2017", 
        url: "https://appomusic.com/assets/jm/se/se.jpg",
        description: "On the surface, John Mayer already has everything: guitar-god status, an honorary membership with the Grateful Dead, a trove of GRAMMY\u00AEs and Rolexes. But everything feels like nothing when you don't have someone to share it with, especially when you\u2019re nearing 40 and humbled by heartbreak. This album is about his quest for forgiveness, companionship, family, and meaning\u2014the real everything. In classic Mayer fashion, it\u2019s deeply sentimental and a little existential. On \u201CIn the Blood,\u201D he ponders his fate with his heart on his sleeve: \u201CHow much of my mother has my mother left in me? How much of my love will be insane to some degree? And what about this feeling that I\u2019m never good enough? Will it wash out in the water or is it always in the blood?\u201D"},

    #5 - Battle Studies
    {artist_id: 2, 
        title: "Battle Studies", 
        genre: "Rock", 
        release_date: "17/11/2009", 
        url: "https://appomusic.com/assets/jm/bs/bs.jpg",
        description: "As a much-respected young guitarist, John Mayer doesn\u2019t rely on his guitar solos to get him through. To his credit, Mayer plays in service of the song. For his fourth studio album, 2009\u2019s Battle Studies, Mayer settles into an adult-contemporary atmosphere where his youth is given a serious growing up. His sense of humor can he hunted down on the acoustic stoner shuffle \u201CWho Says,\u201D where he slyly jokes, \u201CI don\u2019t remember you looking any better \/ But then again, I don\u2019t remember you.\u201D But mostly, Mayer prefers the solemn tones of the U2 chime of \u201CHeartbreak Warfare,\u201D the Peter Gabriel ethereal moan of \u201CAll We Ever Do Is Say Goodbye,\u201D the Don Henley pop of \u201CPerfectly Lonely\u201D and the Elton John melody of \u201CAssassin.\u201D  His duet with country sweetheart Taylor Swift on \u201CHalf of My Heart\u201D portrays him as a guy keeping an eye on his next stepping stone. \u201CCrossroads\u201D brings him back to the blues in time to turn it into near techno. \u201CEdge of Desire,\u201D \u201CDo You Know Me\u201D and \u201CFriends, Lovers or Nothing\u201D end things with a tender soft rock touch."},

    #6 - Continuum
    {artist_id: 2, 
        title: "Continuum", 
        genre: "Singer/Songwriter", 
        release_date: "12/09/2006", 
        url: "https://appomusic.com/assets/jm/cm/cm.jpg",
        description: "After throwing fans of his campfire serenades off guard with the jam-heavy live album Try!, Continuum confirms John Mayer\u2019s transformation into a 21st-century soul man with serious blues-rock chops. And for Mayer, that shift means more than just casting his songs in a gospel glow, but also speaking to political unrest atop the laidback shuffle of \u201CWaiting on the World to Change.\u201D Ultimately, the growth Mayer exhibits here can be gauged not just by his shred-tastic cover of Hendrix\u2019s \u201CBold as Love,\u201D but by the fact he answers it with \u201CDreaming with a Broken Heart,\u201D a lighter-waving anthem to call his own."},

    #7 - Traveller
    {artist_id: 3, 
        title: "Traveller", 
        genre: "Country", 
        release_date: "4/05/2015", 
        url: "https://appomusic.com/assets/cs/tv/tv.jpg",
        description: "Nashville\u2019s one-man hit factory presses pause on the production line for a soulful solo debut. 13 years in the writing, the tracks on Traveller possess choruses as effortlessly infectious as anything Stapleton has gifted to high profile clients like Adele and Luke Bryan but there\u2019s a fascinating desperation to the themes here. From the wild, sleepless delirium at the heart of \u201CParachute\u201D to the bandit bluegrass on \u201COutlaw State of Mind\u201D, this is country rock that\u2019s unafraid to explore drink, drugs, and a very dark underbelly."},

    #8 - weird!
    {artist_id: 4, 
        title: "weird!", 
        genre: "Alternative", 
        release_date: "4/12/2020", 
        url: "https://www.wordsformusic.blog/wp-content/uploads/2020/12/yungblud-weird-album-cover.jpg",
        description: "\u201CMy first record was almost like a phone call asking, \u2018Is there anyone out there who\u2019s like me?\u2019\u201D YUNGBLUD tells Apple Music. \u201CAnd it turned out there were millions of people. I found a community where I belong. And weird! is about them.\u201D If that debut, 2018\u2019s 21st Century Liability, was propelled forward by the Doncaster artist\u2019s anger at being misunderstood, weird! is an ode to optimism, as YUNGBLUD celebrates the healing power of finding your people across 12 songs inspired by his own. But weird!\u2014a dizzingly diverse album influenced by everyone from the Beastie Boys to Amy Winehouse and the Arctic Monkeys\u2014is also a deeply personal exploration of coming home to yourself after troubled times. \u201CIt was written after the weirdest 18 months of my entire existence,\u201D says YUNGBLUD, whose real name is Dominic Harrison. \u201CI nearly lost my mum in a car accident; [YUNGBLUD] got really fucking big, really fucking quickly; I fell in love and it was all over the internet, and then, when it didn\u2019t work out, that was all over the internet, too.\u201D Coming home in late 2019\u2014and playing a sold-out show at London\u2019s Brixton Academy\u2014switched the lights back on after a period of heartbreak-induced depression. \u201CAfter the show, at about four in the morning, I went up to Primrose Hill,\u201D he recalls. \u201CIn the freezing cold, the lyrics to \u2018weird!\u2019 just came out. And that's when I knew what this album was going to be about. It was going to be an album of overcoming the weirdest, hardest times of your life. And knowing that you're going to be all right in the end.\u201D"},

    #9 - 21st Century Liability!
    {artist_id: 4, 
        title: "21st Century Liability", 
        genre: "Alternative", 
        release_date: "6/07/2018", 
        url: "https://images.genius.com/914991c54f1fb63ecdc9b45b6fd9cab7.939x939x1.jpg",
        description: "On 21st Century Liability, the adventurous Yorkshire artist takes the sounds bouncing in his head (electrified pop, ska, and hip-hop) and creates chart-friendly chaos. The songs leap from the speakers, YUNGBLUD lording over them like a mad professor with a handsome drawl. The title track stomps like \u201CSo What'cha Want\u201D Beasties, even vocally simulating a DJ scratch (you've got to hear it to believe it). \u201CI Love You, Will You Marry Me\u201D lets his romantic side flex over an upbeat electro-ska groove. Yet it's the poignant \u201CPolygraph Eyes\u201D\u2014a stern commentary on date-rape culture\u2014that stands out the most; behind YUNGBLUD's wild, up-for-whatever persona beats a caring heart."},
])

Track.create([
    #1 - Circles
    {album_id: 1, track_number: 1, duration: "2:50", title: "Circles", url: "https://appomusic.com/assets/mm/cr/01.flac"},
    {album_id: 1, track_number: 2, duration: "3:52", title: "Complicated", url: "https://appomusic.com/assets/mm/cr/02.flac"},
    {album_id: 1, track_number: 3, duration: "3:29", title: "Blue World", url: "https://appomusic.com/assets/mm/cr/03.flac"},
    {album_id: 1, track_number: 4, duration: "5:42", title: "Good News", url: "https://appomusic.com/assets/mm/cr/04.flac", play_count: 80},
    {album_id: 1, track_number: 5, duration: "3:40", title: "I Can See", url: "https://appomusic.com/assets/mm/cr/05.flac"},
    {album_id: 1, track_number: 6, duration: "4:16", title: "Everybody", url: "https://appomusic.com/assets/mm/cr/06.flac"},
    {album_id: 1, track_number: 7, duration: "4:46", title: "Woods", url: "https://appomusic.com/assets/mm/cr/07.flac"},
    {album_id: 1, track_number: 8, duration: "4:58", title: "Hand Me Downs", url: "https://appomusic.com/assets/mm/cr/08.flac"},
    {album_id: 1, track_number: 9, duration: "3:37", title: "That's on Me", url: "https://appomusic.com/assets/mm/cr/09.flac"},
    {album_id: 1, track_number: 10, duration: "3:19", title: "Hands", url: "https://appomusic.com/assets/mm/cr/10.flac"},
    {album_id: 1, track_number: 11, duration: "5:30", title: "Surf", url: "https://appomusic.com/assets/mm/cr/11.flac"},
    {album_id: 1, track_number: 12, duration: "2:40", title: "Once a Day", url: "https://appomusic.com/assets/mm/cr/12.flac"},
    {album_id: 1, track_number: 13, duration: "4:47", title: "Right", url: "https://appomusic.com/assets/mm/cr/13.flac"},
    {album_id: 1, track_number: 14, duration: "4:14", title: "Floating", url: "https://appomusic.com/assets/mm/cr/14.flac"},
    
    #2 - Swimming
    {album_id: 2, track_number: 1, duration: "2:41", title: "Come Back to Earth", url: "https://appomusic.com/assets/mm/sw/01.mp3"},
    {album_id: 2, track_number: 2, duration: "4:05", title: "Hurt Feelings", url: "https://appomusic.com/assets/mm/sw/02.mp3", play_count: 70},
    {album_id: 2, track_number: 3, duration: "4:48", title: "What's the Use?", url: "https://appomusic.com/assets/mm/sw/03.mp3"},
    {album_id: 2, track_number: 4, duration: "3:35", title: "Perfecto", url: "https://appomusic.com/assets/mm/sw/04.mp3"},
    {album_id: 2, track_number: 5, duration: "5:45", title: "Self Care", url: "https://appomusic.com/assets/mm/sw/05.mp3", play_count: 100},
    {album_id: 2, track_number: 6, duration: "4:10", title: "Wings", url: "https://appomusic.com/assets/mm/sw/06.mp3"},
    {album_id: 2, track_number: 7, duration: "4:47", title: "Ladders", url: "https://appomusic.com/assets/mm/sw/07.mp3", play_count: 50},
    {album_id: 2, track_number: 8, duration: "4:31", title: "Small Worlds", url: "https://appomusic.com/assets/mm/sw/08.mp3"},
    {album_id: 2, track_number: 9, duration: "3:30", title: "Conversation, Pt. 1", url: "https://appomusic.com/assets/mm/sw/09.mp3"},
    {album_id: 2, track_number: 10, duration: "3:57", title: "Dunno", url: "https://appomusic.com/assets/mm/sw/10.mp3"},
    {album_id: 2, track_number: 11, duration: "5:45", title: "Jet Fuel", url: "https://appomusic.com/assets/mm/sw/11.mp3"},
    {album_id: 2, track_number: 12, duration: "5:48", title: "2009", url: "https://appomusic.com/assets/mm/sw/12.mp3", play_count: 90},
    {album_id: 2, track_number: 13, duration: "4:12", title: "So It Goes", url: "https://appomusic.com/assets/mm/sw/13.mp3"},

    #3 - The Divine Feminine
    {album_id: 3, track_number: 1, duration: "4:16", title: "Congratulations (feat. Bilal)", url: "https://appomusic.com/assets/mm/df/01.mp3"},
    {album_id: 3, track_number: 2, duration: "5:05", title: "Dang! (feat. Anderson .Paak)", url: "https://appomusic.com/assets/mm/df/02.mp3"},
    {album_id: 3, track_number: 3, duration: "5:26", title: "Stay", url: "https://appomusic.com/assets/mm/df/03.mp3", play_count: 60},
    {album_id: 3, track_number: 4, duration: "4:47", title: "Skin", url: "https://appomusic.com/assets/mm/df/04.mp3"},
    {album_id: 3, track_number: 5, duration: "8:00", title: "Cinderella (feat. Ty Dolla $ign)", url: "https://appomusic.com/assets/mm/df/05.mp3", play_count: 40},
    {album_id: 3, track_number: 6, duration: "3:11", title: "Planet God Damn (feat. Njomza)", url: "https://appomusic.com/assets/mm/df/06.mp3"},
    {album_id: 3, track_number: 7, duration: "4:32", title: "Soulmate", url: "https://appomusic.com/assets/mm/df/07.mp3"},
    {album_id: 3, track_number: 8, duration: "5:19", title: "We (feat. CeeLo Green)", url: "https://appomusic.com/assets/mm/df/08.mp3"},
    {album_id: 3, track_number: 9, duration: "3:36", title: "My Favorite Part (feat. Ariana Grande)", url: "https://appomusic.com/assets/mm/df/09.mp3"},
    {album_id: 3, track_number: 10, duration: "8:20", title: "God is Fair, Sexy Nasty (feat. Kendrick Lamar)", url: "https://appomusic.com/assets/mm/df/10.mp3"},
    
    #4 - The Search for Everything
    {album_id: 4, track_number: 1, duration: "3:54", title: "Still Feel Like Your Man", url: "https://appomusic.com/assets/jm/se/01.mp3", play_count: 60}, 
    {album_id: 4, track_number: 2, duration: "3:59", title: "Emoji of a Wave", url: "https://appomusic.com/assets/jm/se/02.mp3"},
    {album_id: 4, track_number: 3, duration: "4:09", title: "Helpless", url: "https://appomusic.com/assets/jm/se/03.mp3"},
    {album_id: 4, track_number: 4, duration: "3:32", title: "Love on the Weekend", url: "https://appomusic.com/assets/jm/se/04.mp3", play_count: 70},
    {album_id: 4, track_number: 5, duration: "4:04", title: "In the Blood", url: "https://appomusic.com/assets/jm/se/05.mp3", play_count: 50},
    {album_id: 4, track_number: 6, duration: "3:33", title: "Changing", url: "https://appomusic.com/assets/jm/se/06.mp3"},
    {album_id: 4, track_number: 7, duration: "1:54", title: "Theme from \"The Search for Everything\"", url: "https://appomusic.com/assets/jm/se/07.mp3"},
    {album_id: 4, track_number: 8, duration: "4:25", title: "Moving On and Getting Over", url: "https://appomusic.com/assets/jm/se/08.mp3"},
    {album_id: 4, track_number: 9, duration: "3:43", title: "Never on the Day You Leave", url: "https://appomusic.com/assets/jm/se/09.mp3"},
    {album_id: 4, track_number: 10, duration: "4:02", title: "Rosie", url: "https://appomusic.com/assets/jm/se/10.mp3"},
    {album_id: 4, track_number: 11, duration: "3:24", title: "Roll It on Home", url: "https://appomusic.com/assets/jm/se/11.mp3"},
    {album_id: 4, track_number: 12, duration: "3:10", title: "You're Gonna Live Forever in Me", url: "https://appomusic.com/assets/jm/se/12.mp3"},

    #5 - Battle Studies
    {album_id: 5, track_number: 1, duration: "4:29", title: "Heartbreak Warfare", url: "https://appomusic.com/assets/jm/bs/01.mp3", play_count: 30},
    {album_id: 5, track_number: 2, duration: "4:35", title: "All We Ever Do is Say Goodbye", url: "https://appomusic.com/assets/jm/bs/02.mp3"},
    {album_id: 5, track_number: 3, duration: "4:10", title: "Half of My Heart", url: "https://appomusic.com/assets/jm/bs/03.mp3", play_count: 40},
    {album_id: 5, track_number: 4, duration: "2:55", title: "Who Says", url: "https://appomusic.com/assets/jm/bs/04.mp3", play_count: 50},
    {album_id: 5, track_number: 5, duration: "4:28", title: "Perfectly Lonely", url: "https://appomusic.com/assets/jm/bs/05.mp3"},
    {album_id: 5, track_number: 6, duration: "5:14", title: "Assassin", url: "https://appomusic.com/assets/jm/bs/06.mp3"},
    {album_id: 5, track_number: 7, duration: "2:29", title: "Crossroads", url: "https://appomusic.com/assets/jm/bs/07.mp3"},
    {album_id: 5, track_number: 8, duration: "4:15", title: "War of My Life", url: "https://appomusic.com/assets/jm/bs/08.mp3"},
    {album_id: 5, track_number: 9, duration: "5:31", title: "Edge of Desire", url: "https://appomusic.com/assets/jm/bs/09.mp3"},
    {album_id: 5, track_number: 10, duration: "2:30", title: "Do You Know Me", url: "https://appomusic.com/assets/jm/bs/10.mp3"},
    {album_id: 5, track_number: 11, duration: "5:59", title: "Friends, Lovers or Nothing", url: "https://appomusic.com/assets/jm/bs/11.mp3"},

    #6 - Continuum
    {album_id: 6, track_number: 1, duration: "3:20", title: "Waiting On the World to Change", url: "https://appomusic.com/assets/jm/cm/01.mp3", play_count: 80},
    {album_id: 6, track_number: 2, duration: "4:52", title: "I Don't Trust Myself (With Loving You)", url: "https://appomusic.com/assets/jm/cm/02.mp3"},
    {album_id: 6, track_number: 3, duration: "4:02", title: "Belief", url: "https://appomusic.com/assets/jm/cm/03.mp3"},
    {album_id: 6, track_number: 4, duration: "4:05", title: "Gravity", url: "https://appomusic.com/assets/jm/cm/04.mp3", play_count: 100},
    {album_id: 6, track_number: 5, duration: "3:19", title: "The Heart of Life", url: "https://appomusic.com/assets/jm/cm/05.mp3"},
    {album_id: 6, track_number: 6, duration: "4:11", title: "Vultures", url: "https://appomusic.com/assets/jm/cm/06.mp3"},
    {album_id: 6, track_number: 7, duration: "4:45", title: "Stop This Train", url: "https://appomusic.com/assets/jm/cm/07.mp3"},
    {album_id: 6, track_number: 8, duration: "4:01", title: "Slow Dancing In a Burning Room", url: "https://appomusic.com/assets/jm/cm/08.mp3", play_count: 90},
    {album_id: 6, track_number: 9, duration: "4:18", title: "Bold As Love", url: "https://appomusic.com/assets/jm/cm/09.mp3"},
    {album_id: 6, track_number: 10, duration: "4:07", title: "Dreaming With a Broken Heart", url: "https://appomusic.com/assets/jm/cm/10.mp3", play_count: 60},
    {album_id: 6, track_number: 11, duration: "6:09", title: "In Repair", url: "https://appomusic.com/assets/jm/cm/11.mp3"},
    {album_id: 6, track_number: 12, duration: "2:42", title: "I'm Gonna Find Another You", url: "https://appomusic.com/assets/jm/cm/12.mp3"},

    #7 - Traveller
    {album_id: 7, track_number: 1, duration: "3:42", title: "Traveller", url: "https://appomusic.com/assets/cs/tv/01.mp3"},
    {album_id: 7, track_number: 2, duration: "4:04", title: "Fire Away", url: "https://appomusic.com/assets/cs/tv/02.mp3"},
    {album_id: 7, track_number: 3, duration: "4:53", title: "Tennessee Whiskey", url: "https://appomusic.com/assets/cs/tv/03.mp3", play_count: 200},
    {album_id: 7, track_number: 4, duration: "4:13", title: "Parachute", url: "https://appomusic.com/assets/cs/tv/04.mp3"},
    {album_id: 7, track_number: 5, duration: "3:56", title: "Whiskey and You", url: "https://appomusic.com/assets/cs/tv/05.mp3"},
    {album_id: 7, track_number: 6, duration: "4:04", title: "Nobody to Blame", url: "https://appomusic.com/assets/cs/tv/06.mp3"},
    {album_id: 7, track_number: 7, duration: "4:37", title: "More of You", url: "https://appomusic.com/assets/cs/tv/07.mp3"},
    {album_id: 7, track_number: 8, duration: "4:16", title: "When the Stars Come Out", url: "https://appomusic.com/assets/cs/tv/08.mp3"},
    {album_id: 7, track_number: 9, duration: "4:09", title: "Daddy Doesn't Pray Anymore", url: "https://appomusic.com/assets/cs/tv/09.mp3"},
    {album_id: 7, track_number: 10, duration: "4:37", title: "Might As Well Get Stoned", url: "https://appomusic.com/assets/cs/tv/10.mp3"},
    {album_id: 7, track_number: 11, duration: "4:49", title: "Was It 26", url: "https://appomusic.com/assets/cs/tv/11.mp3"},
    {album_id: 7, track_number: 12, duration: "6:07", title: "The Devil Named Music", url: "https://appomusic.com/assets/cs/tv/12.mp3"},
    {album_id: 7, track_number: 13, duration: "5:37", title: "Outlaw State of Mind", url: "https://appomusic.com/assets/cs/tv/13.mp3"},
    {album_id: 7, track_number: 14, duration: "4:00", title: "Sometimes I Cry", url: "https://appomusic.com/assets/cs/tv/14.mp3"},

    #8 - weird!
    {album_id: 8, track_number: 1, duration: "3:24", title: "teresa", url: "/assets/music/01.mp3"},
    {album_id: 8, track_number: 2, duration: "2:47", title: "cotton candy", url: "/assets/music/02.mp3", play_count: 90},
    {album_id: 8, track_number: 3, duration: "2:43", title: "strawberry lipstick", url: "/assets/music/03.mp3"},
    {album_id: 8, track_number: 4, duration: "3:01", title: "mars", url: "/assets/music/04.mp3", play_count: 70},
    {album_id: 8, track_number: 5, duration: "2:20", title: "superdeadfriends", url: "/assets/music/05.mp3"},
    {album_id: 8, track_number: 6, duration: "4:00", title: "love song", url: "/assets/music/06.mp3"},
    {album_id: 8, track_number: 7, duration: "3:37", title: "god save me, but don't drown me out", url: "/assets/music/07.mp3"},
    {album_id: 8, track_number: 8, duration: "3:12", title: "ice cream man", url: "/assets/music/08.mp3"},
    {album_id: 8, track_number: 9, duration: "3:03", title: "weird!", url: "/assets/music/09.mp3"},
    {album_id: 8, track_number: 10, duration: "3:39", title: "charity", url: "/assets/music/10.mp3"},
    {album_id: 8, track_number: 11, duration: "2:36", title: "it's quiet in beverly hills", url: "/assets/music/11.mp3"},
    {album_id: 8, track_number: 12, duration: "4:27", title: "the freak show", url: "/assets/music/02.mp3"},

    #9 - 21st Century Liability
    {album_id: 9, track_number: 1, duration: "0:30", title: "Eulogy", url: "/assets/music/01.mp3"},
    {album_id: 9, track_number: 2, duration: "3:08", title: "Die for the Hype", url: "/assets/music/02.mp3"},
    {album_id: 9, track_number: 3, duration: "3:11", title: "Doctor Doctor", url: "/assets/music/03.mp3", play_count: 80},
    {album_id: 9, track_number: 4, duration: "3:11", title: "Medication", url: "/assets/music/04.mp3"},
    {album_id: 9, track_number: 5, duration: "3:13", title: "Machine Gun (F**k the NRA)", url: "/assets/music/05.mp3"},
    {album_id: 9, track_number: 6, duration: "2:47", title: "Psychotic Kids", url: "/assets/music/06.mp3"},
    {album_id: 9, track_number: 7, duration: "2:47", title: "Anarchist", url: "/assets/music/07.mp3"},
    {album_id: 9, track_number: 8, duration: "2:57", title: "I Love You, Will You Marry Me", url: "/assets/music/08.mp3", play_count: 100},
    {album_id: 9, track_number: 9, duration: "3:43", title: "Polygraph Eyes", url: "/assets/music/09.mp3"},
    {album_id: 9, track_number: 10, duration: "3:07", title: "Kill Somebody", url: "/assets/music/10.mp3"},
    {album_id: 9, track_number: 11, duration: "3:51", title: "California", url: "/assets/music/11.mp3"},
    {album_id: 9, track_number: 12, duration: "3:09", title: "21st Century Liability", url: "/assets/music/02.mp3"},
])

Playlist.create([
    {user_id: 1, title: "Beach bash 2015"},
    {user_id: 1, title: "Graduation"},
    {user_id: 1, title: "House party"},
    {user_id: 1, title: "Rap Slapz"},
])

PlaylistTrack.create([
    {playlist_id: 1, track_id: 1},
    {playlist_id: 1, track_id: 14},
    {playlist_id: 1, track_id: 26},
    {playlist_id: 1, track_id: 37},
    {playlist_id: 1, track_id: 49},
    {playlist_id: 1, track_id: 62},
    {playlist_id: 1, track_id: 75},
    {playlist_id: 1, track_id: 91},
    {playlist_id: 1, track_id: 102},
])

UserSave.create([
    {user_id: 1, track_id: 64},
    {user_id: 1, track_id: 1},
    {user_id: 1, track_id: 2},
    {user_id: 1, track_id: 3},
    {user_id: 1, track_id: 44},
    {user_id: 1, track_id: 45}, 
    {user_id: 1, track_id: 49}, 
    {user_id: 1, track_id: 15},
    {user_id: 1, track_id: 16},
    {user_id: 1, track_id: 19}, 
    {user_id: 1, track_id: 32},
    {user_id: 1, track_id: 56},
])