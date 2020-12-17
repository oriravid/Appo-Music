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

    #4 - Kid Cudi
    {name: "Kid Cudi", 
        bio: "An old soul with a livewire mind, Kid Cudi is hip-hop\u2019s patron saint of misfits and outsiders. The Cleveland native\u2014born Scott Ramon Seguro Mescudi in 1984\u2014came up fueled by the trials he'd faced early on. After he was expelled from high school, he moved to New York with dreams of becoming a successful rapper. His 2008 breakout hit, \u201CDay \u2018n\u2019 Nite,\u201D neatly encompassed his contradictions: What sounds like a bouncy party cut captured the kind of melancholy candor that would come to define the next decade in hip-hop. Soon signing to Kanye West\u2019s G.O.O.D. Music label, Cudi co-wrote several tracks on his label head\u2019s 808s & Heartbreak, further molding the future of hip-hop in his own introspective image. Over the years, Cudi\u2019s vision has become more expansive, yielding multi-part album series, deep dives into the life of the mind (2016\u2019s Passion, Pain & Demon Slayin\u2019, released after a public admission of anxiety and depression), and boundary-breaking side projects like WZRD, his alt-rock partnership with longtime producer Dot Da Genius. In 2018, Cudi and West teamed up as KIDS SEE GHOSTS. Grappling candidly with the wages of fame, the duo\u2019s track \u201CReborn,\u201D with a chorus movingly sung by Cudi, is a timeless anthem to self-love and self-improvement. For Cudi, creation is ultimately about unlocking access to a higher power. As he told Apple Music about his choice of collaborators, \u201CWe need to feel the music all around us, we need to swim in it. And the only way to do that is to connect with other like-minded people on the same mission.\u201D", 
        url: "https://appomusic.com/assets/kc/kc.jpg"},

    #5 - Alina Baraz
    {name: "Alina Baraz", 
        bio: "Alina Baraz\u2019s purr of a voice is deceptively vulnerable\u2014her soft-focus coo drifts within her subdued production choices, but she\u2019s always in control as she unfurls notes that sound as seductive as they do sweet. Born in 1993 in Cleveland, Ohio, the singer\/songwriter was raised on classical music until, as a teenager, she came across the pop-soul of Amy Winehouse, Corinne Bailey Rae, and Adele. Those genre-blurring influences are felt in Baraz\u2019s creations, first heard on 2015\u2019s Urban Flora, a collaborative EP with Denmark electronic producer Galimatias that featured the atmospheric, piano-guided \u201CMake You Feel.\u201D Therein, Baraz ups the intimacy by nearly whispering her way through a tale of a blossoming romance. A similarly heady interpretation of an intoxicating love, \u201CElectric,\u201D featuring Khalid at his dreamiest, appeared on 2018\u2019s The Color of You EP. In 2020, Baraz released her full-length debut, It Was Divine\u2014\u201CTo Me,\u201D a cathartic cut about love\u2019s dwindling embers, illustrates her lockstep relationship with her music. \u201CThis is the most important song in my career thus far,\u201D Baraz tells Apple Music. \u201CIt\u2019s really altered my life as a person, not even as an artist. Sometimes I find that writing gives you a second voice that you\u2019ll listen to more than yourself.\u201D", 
        url: "https://appomusic.com/assets/ab/ab.jpg"},
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

    #8 - Man On The Moon III: The Chosen
    {artist_id: 4, 
        title: "Man On the Moon III: The Chosen", 
        genre: "Hip-Hop/Rap", 
        release_date: "11/12/2020", 
        url: "https://appomusic.com/assets/kc/tc/tc.jpg",
        description: "\u201CEvery time I make a record, I'm learning something new about myself,\u201D Kid Cudi tells Apple Music. \u201CI didn't realize that my father's death really had an impact on me in the way that it did until I started writing about it: 'Oh, I guess being alone is an issue for me. I guess being depressed is an issue.' I'm just making music, I'm just doing what feels right, but this shit is coming out and it's things that I probably didn't pinpoint [in the moment].\u201D The issues Cudi mentions have been emerging for him since his beginnings as the \u201Clonely stoner,\u201D a New York City-via-Cleveland cool kid who assured a generation of rappers to follow him that it was plenty OK to acknowledge your own inexplicable melancholy.\r\n\r\nMan on the Moon III: The Chosen, which returns to a naming convention Cudi hadn\u2019t utilized since 2010\u2019s Man on the Moon II: The Legend of Mr. Rager (with four solo and two collaborative albums in between), finds him in a sort of post-discovery nirvana, coming clean about his mental-health journey (\u201CMr Solo Dolo III\u201D), his relationship with his mother (\u201CElsie\u2019s Baby Boy [flashback]\u201D), and the power of his celebrity (\u201C4 Da Kidz\u201D). \u201CI was already in a really good place working on Entergalactic [his forthcoming animated series and soundtrack], going crazy on \u2018THE SCOTTS\u2019\u2014but then I was making something else that didn't fit those two projects. After two or three songs, I was like, 'Whoa, this shit really feels like a Man on the Moon. It sounds like you pick right back up where we left off 10 years ago.'\u201D\r\n\r\nTen years ago, Kid Cudi was sidestepping being pigeonholed as an \u201Cemo rapper,\u201D leaning even harder into his alias Mr. Rager, even when that meant looking at himself in the mirror after the partying was done, as reflected in Man on the Moon II\u2019s latter half. For Man on the Moon III, he\u2019s just as in touch with his feelings as he was on II\u2014along with the rest of a dependably vulnerable catalog\u2014it\u2019s just that now those feelings are a bit more positive. \u201CThe whole flow of my life is like so in tune with like everything that I want it to be,\u201D Cudi says. \u201CI'm solid with my baby\u2019s mom. I'm solid with my mom, I'm solid with my sister. I'm solid with my daughter. I'm solid with my nieces. Everything's in place. And I'm happy, you know?\u201D"},

    #9 - Man On the Moon: The End of Day
    {artist_id: 4, 
        title: "Man On the Moon: The End of Day", 
        genre: "Hip-Hop/Rap", 
        release_date: "11/09/2009", 
        url: "https://appomusic.com/assets/kc/ed/ed.jpg",
        description: "Kid Cudi\u2019s full-length debut is a vast, ambitious concept album divided into five acts, each exploring a different aspect of Cudi\u2019s psyche. Sonically, the album takes its cues from new wave and New Romantic bands, techno, and ambient music. The contributions of Ratatat and MGMT further dissolve the boundaries between electronica, modern rock and hip-hop. The album adopts a somber tone throughout."},

    #10 - It Was Divine
    {artist_id: 5, 
        title: "It Was Divine", 
        genre: "R&B/Soul", 
        release_date: "24/04/2020", 
        url: "https://appomusic.com/assets/ab/wd/wd.jpg",
        description: "\u201CI wanted to heal with this album,\u201D Alina Baraz tells Apple Music of It Was Divine, her first official full-length. \u201CI wanted to nourish myself, to understand myself, to mark a fresh start.\u201D The R&B-soul singer isn\u2019t new to the music business (she was formerly part of a duo with Denmark producer Galimatias), but she does want this album to serve as a new introduction. It details a painful breakup, yes, but it\u2019s also about her\u2014how she thinks, feels, writes, and processes emotions. She\u2019s big on symbols and dreams, for example, and wanted her album title to wink at divinity for its implications about power, control, and destiny. Baraz began by releasing the teaser track \u201CTrust\u201D in January, and even though it didn\u2019t make the final album, it offered a glimpse at what was to come. \u201CTrust became such a theme in my life,\u201D she says. \u201CI had to learn to trust myself, to let go, and to start over.\u201D On Divine, she uses her journey through a painful relationship\u2014from her initial butterflies to broken heart\u2014as a framework through which to tell a story about transformation and self-worth. The woman at the end of the album is stronger and more clear-eyed than the woman we meet at the start. The relationship the album details is \u201Cpretty nonexistent,\u201D Baraz says. \u201CBut the relationship with myself is thriving. I\u2019m glowing. We love it.\u201D"},

    #11 - The Color of You
    {artist_id: 5, 
        title: "The Color of You", 
        genre: "R&B/Soul", 
        release_date: "06/04/2018", 
        url: "https://appomusic.com/assets/ab/cy/cy.jpg",
        description: "When Alina Baraz initially emerged in 2015, it was as a duo with Denmark producer Galimatias; the pair's joint EP, Urban Flora, is a package of lush, electronic slow-jams that drew comparisons to Rhye and Lana Del Rey. Here, on her first full-length, Baraz steps into the spotlight with minimalist R&B songs that put her silky soprano front and center. Experimental electronic production still plays a part\u2014\u201CI Don\u2019t Even Know Why Though\u201D is a swirling duet between her and the synthesizer\u2014but even when she\u2019s joined by breakout star Khalid (\u201CFloating,\u201D \u201CElectric\u201D), it\u2019s Baraz\u2019s smoky whisper that keeps us wanting more."},

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

    #8 - Man On The Moon III: The Chosen
    {album_id: 8, track_number: 1, duration: "0:37", title: "Beautiful Trip", url: "https://appomusic.com/assets/kc/tc/01.flac"},
    {album_id: 8, track_number: 2, duration: "3:13", title: "Tequila Shots", url: "https://appomusic.com/assets/kc/tc/02.flac", play_count: 100},
    {album_id: 8, track_number: 3, duration: "3:19", title: "Another Day", url: "https://appomusic.com/assets/kc/tc/03.flac"},
    {album_id: 8, track_number: 4, duration: "3:36", title: "She Knows This", url: "https://appomusic.com/assets/kc/tc/04.flac", play_count: 80},
    {album_id: 8, track_number: 5, duration: "2:28", title: "Dive", url: "https://appomusic.com/assets/kc/tc/05.flac"},
    {album_id: 8, track_number: 6, duration: "2:30", title: "Damaged", url: "https://appomusic.com/assets/kc/tc/06.flac"},
    {album_id: 8, track_number: 7, duration: "3:21", title: "Heaven on Earth", url: "https://appomusic.com/assets/kc/tc/07.flac"},
    {album_id: 8, track_number: 8, duration: "2:54", title: "Show Out", url: "https://appomusic.com/assets/kc/tc/08.flac", play_count: 60},
    {album_id: 8, track_number: 9, duration: "4:02", title: "Mr. Solo Dolo III", url: "https://appomusic.com/assets/kc/tc/09.flac"},
    {album_id: 8, track_number: 10, duration: "2:56", title: "Sad People", url: "https://appomusic.com/assets/kc/tc/10.flac"},
    {album_id: 8, track_number: 11, duration: "3:59", title: "Elsie's Baby Boy (Flashback)", url: "https://appomusic.com/assets/kc/tc/11.flac"},
    {album_id: 8, track_number: 12, duration: "4:09", title: "Sept. 16", url: "https://appomusic.com/assets/kc/tc/12.flac"},
    {album_id: 8, track_number: 13, duration: "5:25", title: "The Void", url: "https://appomusic.com/assets/kc/tc/13.flac"},
    {album_id: 8, track_number: 14, duration: "2:45", title: "Lovin' Me (feat. Phoebe Bridgers)", url: "https://appomusic.com/assets/kc/tc/14.flac"},
    {album_id: 8, track_number: 15, duration: "2:56", title: "The Pale Moonlight", url: "https://appomusic.com/assets/kc/tc/15.flac"},
    {album_id: 8, track_number: 16, duration: "3:51", title: "Rockstar Knights", url: "https://appomusic.com/assets/kc/tc/16.flac"},
    {album_id: 8, track_number: 17, duration: "3:04", title: "4 Da Kidz", url: "https://appomusic.com/assets/kc/tc/17.flac"},
    {album_id: 8, track_number: 18, duration: "3:32", title: "Lord I Know", url: "https://appomusic.com/assets/kc/tc/18.flac"},

    #9 - Man On The Moon: The End of Day
    {album_id: 9, track_number: 1, duration: "3:19", title: "In My Dreams (Cudder Anthem)", url: "https://appomusic.com/assets/kc/ed/01.flac"},
    {album_id: 9, track_number: 2, duration: "3:56", title: "Soundtrack 2 My Life", url: "https://appomusic.com/assets/kc/ed/02.flac"},
    {album_id: 9, track_number: 3, duration: "2:31", title: "Simple As...", url: "https://appomusic.com/assets/kc/ed/03.flac"},
    {album_id: 9, track_number: 4, duration: "4:26", title: "Solo Dolo (Nightmare)", url: "https://appomusic.com/assets/kc/ed/04.flac"},
    {album_id: 9, track_number: 5, duration: "4:21", title: "Heart of a Lion (Kid Cudi Theme Music)", url: "https://appomusic.com/assets/kc/ed/05.flac"},
    {album_id: 9, track_number: 6, duration: "4:03", title: "My World (feat. Billy Cravens)", url: "https://appomusic.com/assets/kc/ed/06.flac"},
    {album_id: 9, track_number: 7, duration: "3:41", title: "Day 'n' Nite", url: "https://appomusic.com/assets/kc/ed/07.flac", play_count: 90},
    {album_id: 9, track_number: 8, duration: "3:41", title: "Sky Might Fall", url: "https://appomusic.com/assets/kc/ed/08.flac"},
    {album_id: 9, track_number: 9, duration: "4:20", title: "Enter Galactic (Love Connection Part I)", url: "https://appomusic.com/assets/kc/ed/09.flac"},
    {album_id: 9, track_number: 10, duration: "4:07", title: "Alive (feat. Ratatat)", url: "https://appomusic.com/assets/kc/ed/10.flac"},
    {album_id: 9, track_number: 11, duration: "4:19", title: "Cudi Zone", url: "https://appomusic.com/assets/kc/ed/11.flac"},
    {album_id: 9, track_number: 12, duration: "3:36", title: "Make Her Say (feat. Kanye West & Common)", url: "https://appomusic.com/assets/kc/ed/12.flac"},
    {album_id: 9, track_number: 13, duration: "4:55", title: "Pursuit of Happiness (feat. MGMT & Ratatat)", url: "https://appomusic.com/assets/kc/ed/13.flac", play_count: 70},
    {album_id: 9, track_number: 14, duration: "3:32", title: "Hyyerr (feat. Chip tha Ripper)", url: "https://appomusic.com/assets/kc/ed/14.flac"},
    {album_id: 9, track_number: 15, duration: "3:47", title: "Up Up & Away", url: "https://appomusic.com/assets/kc/ed/15.flac", play_count: 50},

    #10 - It Was Divine
    {album_id: 10, track_number: 1, duration: "2:42", title: "My Whole Life", url: "https://appomusic.com/assets/ab/wd/01.flac"},
    {album_id: 10, track_number: 2, duration: "2:21", title: "Morocco (feat. 6LACK)", url: "https://appomusic.com/assets/ab/wd/02.flac"},
    {album_id: 10, track_number: 3, duration: "3:34", title: "Frank", url: "https://appomusic.com/assets/ab/wd/03.flac"},
    {album_id: 10, track_number: 4, duration: "5:00", title: "Endlessly", url: "https://appomusic.com/assets/ab/wd/04.flac"},
    {album_id: 10, track_number: 5, duration: "3:37", title: "Gimme The Wheel (feat. Smino)", url: "https://appomusic.com/assets/ab/wd/05.flac"},
    {album_id: 10, track_number: 6, duration: "3:20", title: "Off the Grid (feat. Khalid)", url: "https://appomusic.com/assets/ab/wd/06.flac"},
    {album_id: 10, track_number: 7, duration: "2:31", title: "More Than Enough", url: "https://appomusic.com/assets/ab/wd/07.flac", play_count: 70},
    {album_id: 10, track_number: 8, duration: "3:23", title: "Night and Morning", url: "https://appomusic.com/assets/ab/wd/08.flac"},
    {album_id: 10, track_number: 9, duration: "4:17", title: "To Me", url: "https://appomusic.com/assets/ab/wd/09.flac", play_count: 100},
    {album_id: 10, track_number: 10, duration: "2:06", title: "Memo Blue", url: "https://appomusic.com/assets/ab/wd/10.flac"},
    {album_id: 10, track_number: 11, duration: "3:33", title: "Who Got Me", url: "https://appomusic.com/assets/ab/wd/11.flac"},
    {album_id: 10, track_number: 12, duration: "3:51", title: "Say You Know", url: "https://appomusic.com/assets/ab/wd/12.flac"},
    {album_id: 10, track_number: 13, duration: "4:24", title: "Take It Home", url: "https://appomusic.com/assets/ab/wd/13.flac"},
    {album_id: 10, track_number: 14, duration: "1:29", title: "Be Good", url: "https://appomusic.com/assets/ab/wd/14.flac"},
    {album_id: 10, track_number: 15, duration: "3:44", title: "Until I Met You (feat. Nas)", url: "https://appomusic.com/assets/ab/wd/15.flac"},
    {album_id: 10, track_number: 16, duration: "2:14", title: "The Beginning", url: "https://appomusic.com/assets/ab/wd/16.flac"},

    #11 - The Color of You
    {album_id: 11, track_number: 1, duration: "4:06", title: "Fallin", url: "https://appomusic.com/assets/ab/cy/01.mp3"},
    {album_id: 11, track_number: 2, duration: "2:54", title: "Floating (feat. Khalid)", url: "https://appomusic.com/assets/ab/cy/02.mp3", play_count: 80},
    {album_id: 11, track_number: 3, duration: "2:47", title: "High", url: "https://appomusic.com/assets/ab/cy/03.mp3", play_count: 50},
    {album_id: 11, track_number: 4, duration: "3:06", title: "Coming To My Senses", url: "https://appomusic.com/assets/ab/cy/04.mp3"},
    {album_id: 11, track_number: 5, duration: "3:22", title: "I Don't Even Know Why Though", url: "https://appomusic.com/assets/ab/cy/05.mp3", play_count: 60},
    {album_id: 11, track_number: 6, duration: "3:32", title: "Tainted", url: "https://appomusic.com/assets/ab/cy/06.mp3"},
    {album_id: 11, track_number: 7, duration: "3:39", title: "The One (feat. Jada)", url: "https://appomusic.com/assets/ab/cy/07.mp3"},
    {album_id: 11, track_number: 8, duration: "3:27", title: "Yours", url: "https://appomusic.com/assets/ab/cy/08.mp3"},
    {album_id: 11, track_number: 9, duration: "4:06", title: "Electric (feat. Khalid)", url: "https://appomusic.com/assets/ab/cy/09.mp3", play_count: 90},

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