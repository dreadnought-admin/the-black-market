
require 'faker'

Genre.destroy_all
Record.destroy_all
User.destroy_all

puts "Creating genres..."

c1 = Genre.create(genre: 'Darkwave')
c2 = Genre.create(genre: 'Deathrock')
c3 = Genre.create(genre: 'Post-Punk')
c4 = Genre.create(genre: 'Goth Rock')

puts "Genres created!"



puts "Summoning users..."

u1 = User.create(username: "Peter", 
    bio: "The baddest motherfucker", 
    country: "USA", 
    instagram_handle: nil, 
    twitter_handle: nil, 
    avatar: "http://aslongasitsblack.com/wp-content/uploads/2019/07/peter-steele-1-e1567446464507-988x1024.jpg", 
    password_digest: "type0", 
    email: Faker::Internet.email)

u2 = User.create(username: "Sioux", 
    bio: "Dark queen", 
    country: "UK",
    instagram_handle: nil, 
    twitter_handle: nil, 
    avatar: "https://consequence.net/wp-content/uploads/2015/08/screen-shot-2015-08-31-at-11-40-25-am.png", 
    password_digest: "bansheeQueen", 
    email: Faker::Internet.email)

u3 = User.create(username: "Rob", 
    bio: "It's Friday, I'm in love", 
    country: "UK",
    instagram_handle: nil, 
    twitter_handle: nil, 
    avatar: "https://www.nme.com/wp-content/uploads/2023/01/cure_paul_cox_3.jpg", 
    password_digest: "p0rn0graphy", 
    email: Faker::Internet.email)

    10.times do
        User.create!(username: Faker::Internet.username(specifier: 5..15), 
        bio: Faker::Lorem.paragraph(sentence_count: 3, supplemental: false, random_sentences_to_add: 4),
        country: Faker::Address.country,
        instagram_handle: nil,
        twitter_handle: nil,
        avatar: Faker::LoremFlickr.pixelated_image,
        password_digest: Faker::Internet.password,
        email: Faker::Internet.email)
    end 

puts "Users summoned!"

puts "Creating records..."

r1 = Record.create(
    album_name: "First and Last and Always", 
    artist_name: "Sisters of Mercy", 
    album_cover: "https://m.media-amazon.com/images/I/5170MWXHA4L._UF1000,1000_QL80_.jpg", 
    condition: "Mint", 
    genre: c3, 
    user_id: u3.id, 
    release_date: "March 11, 1985", 
    release_description: "First and Last and Always is the debut studio album by English gothic rock band the Sisters of Mercy. It was released on 11 March 1985 through the band's self-financed Merciful Release label.",
    record_labels: "Elektra Records",  
    price: rand(1..1000), 
    in_stock: true)

r2 = Record.create( 
    album_name: "The Sky's Gone Out", 
    artist_name: "Bauhaus", 
    album_cover: "https://i.discogs.com/o3yzAi_CocgxqKVAC8bIw8x6PeKGL1BoTPFaRKgGers/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MjIx/MC0xNDE3NzQwNjAx/LTk1NjIuanBlZw.jpeg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u1.id,
    release_date: "October 22, 1982", 
    release_description: "The Sky's Gone Out is the third studio album by English gothic rock band Bauhaus, released in 1982 by record label Beggars Banquet.",
    record_labels: "Beggas Banquet", 
    spotify_link: "http://testinglink.com", 
    price: rand(1..1000), 
    in_stock: true)

r3 = Record.create(
    album_name: "Pornography", 
    artist_name: "The Cure", 
    album_cover: "https://www.udiscovermusic.com/wp-content/uploads/2016/09/Tthe-Cure-Pornography-album-cover-web-optimised-820.jpg", 
    condition: "Mint", 
    genre: c4, 
    user_id: u2.id,
    release_date: "May 4, 1982", 
    release_description: "Pornography is the fourth studio album by English Gothic rock band The Cure, released on 3 May 1982 by Fiction Records. Preceded by the non-album single 'Charlotte Sometimes', it was the band's first album with new producer Phil Thornalley, and was recorded at RAK Studios from January to April 1982.",
    record_labels: nil, 
    price: rand(1..1000), 
    in_stock: true)

r4 = Record.create(
    album_name: "Floodland", 
    artist_name: "Sisters of Mercy", 
    album_cover: "http://s3.amazonaws.com/quietus_production/images/articles/10717/The_Sisters_of_Mercy_-_Floodland_1353248725.jpg", 
    condition: "Average", 
    genre: c1, 
    user_id: u3.id,
    release_date: "November 13, 1987", 
    release_description: "Floodland is the second studio album by English gothic rock band the Sisters of Mercy. It was released on 16 November 1987, through Merciful Release internationally and distributed by WEA, with Elektra Records handling the United States release.",
    record_labels: "Elektra Records", 
    price: rand(1..1000), 
    in_stock: true)

r5 = Record.create(
    album_name: "Belirdi Gece", 
    artist_name: "She Past Away", 
    album_cover: "https://fabrikarecords.com/wp-content/uploads/2020/08/FP008-FRONT-1200-768x768.png", 
    condition: "Mint", 
    genre: c1, 
    user_id: u2.id,
    release_date: "Februrary 20, 2012",
    release_description: "There are only a few albums that could be cited as a pivotal moment in dark music over the past decade, and one of them would be she past away’s belirdi gece (which translates to “the night appeared”) from 2012. It could be said that the 2010s wave of the darkwave genre is defined by this lp, a monumental component to the scene’s landscape. The album—written by volkan caner, idris akbulut, and doruk öztürkcan from bursa, turkey—appeared from nowhere and slowly crept up on unsuspecting fans of the genre. Immediately, she past away felt like a reincarnation of sisters of mercy with their snappy drum machine underneath caner’s bellowing vocals sung in turkish. Or, further, she past away is the long lost child of 1980s post-punk bands such as clan of xymox, joy division, and the cure. 
    But it would be too easy to compare them to classic, old-guard bands. Belirdi gece has become a staple in the genre itself, the ignition to a slew of bands that aim for the same mood and distinct sound that has become spa’s very own. This lp was just the beginning of the band’s rise into the darkwave zeitgeist—a great accomplishment for any band, especially, whose lyrics are not sung in english. There is drama, mystery, and longing within this album, but it also maintains a pure danceability. These are tracks for the goth club, full of classics that go hand-in-hand with the progenitors of the movement. 
    While most tracks on belirdi gece feel familiar, it’s because you can’t escape them. Nightclubs around the world rely on the songs to keep dancefloors crammed into the early hours of morning. “sanri,” the opening song, is an unmistakable classic that brings on waves of sadness and a spooky atmosphere that remains throughout the lp. Another recognizable classic is “ritüel” that is shrouded in mystery (most of all by the ghostly whispers that haunt the track) and led by a prominent, demanding guitar line. “monoton” is just as its song title suggests: a feeling of melancholy, a projection of the hopelessness of life that’s viewed in a monotone black and white. The song “kasvetli kutlama” is another dance floor diamond, perfect for smoke-filled basements, while “insanlar” pulls back on the dramatics and derives its melody and atmosphere from traditional forms of post-punk, complete with haunting vocals that brim with longing. 
    With its minimal wave attributes, “belirdi gece (musallat)” is melodramatic and awash in darkness. “ruh”—a track with an insatiable beat—progresses into an epic resolution as caner’s vocals echo and call out into the black night sky. The eeriness of “kemir beni” recalls a strange feeling of anticipation with its synthpunk beat and running synths while “bozbulanik” continues on with a sense of dread, an urgency. Belirdi gece closes out with “ice kapanis,” a proper ending to the severity of the album, akin to the cure’s signature death march à la seventeen seconds. She past away’s first full length introduced the scene to their own style of funeral dance—one full of tumultuous emotions—that was not only fun to dance to, but altered darkwave’s dna. 
    We present you the 10th anniversary limited edition of “belirdi gece”. Black on black cover design and semi black semi clear vinyl are the main features of this celebratory edition.",
    record_labels: "Fabrika Records", 
    price: rand(1..500), 
    in_stock: false)

r6 = Record.create( 
    album_name: "Juju", 
    artist_name: "Siouxsie and the Banshees", 
    album_cover: "https://i.discogs.com/gvazKF-vrdSZYNJ1vDa1klvrRYfRJ8g0wU_f-VmbHUY/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0Mjgx/Mi0xNDU5MTY1OTcx/LTY0NTcuanBlZw.jpeg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u1.id,
    release_date: "June 6, 1981", 
    release_description: "Juju is the fourth studio album by English rock band Siouxsie and the Banshees. It was recorded at Surrey Sound studio with Nigel Gray as co-producer, and was released on 19 June 1981 by record label Polydor. Two singles were released from Juju: 'Spellbound' and 'Arabian Knights'.",
    record_labels: "PVC Records", 
    price: rand(1..500), 
    in_stock: true)

puts "Records spun!"

# # puts "Creating carts..."

# # cr1 = RecordsInCart.create(record_id: r1.id)
# # cr2 = RecordsInCart.create(record_id: r2.id)
# # cr3 = RecordsInCart.create(record_id: r4.id)
# # cr4 = RecordsInCart.create(record_id: r5.id)

# puts "Creating carts..."

# # s1 = ShoppingCart.create!(user_id: u1.id)
# # s2 = ShoppingCart.create!(user_id: u3.id)
# # s3 = ShoppingCart.create!(user_id: u2.id)


puts "Generating comments..."

2.times do 
    Comment.create!(user_id: u1.id, record_id: r2.id,
                    comment_content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u3.id, record_id: r1.id,
                    comment_content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u2.id, record_id: r4.id,
                    comment_content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u3.id, record_id: r5.id,
                    comment_content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u1.id, record_id: r6.id,
                    comment_content:Faker::Lorem.sentence)
end 

puts "Comments generated!"

puts "Creating watches..."

Watch.create!(user_id: u1.id, record_id: r1.id )
Watch.create!(user_id: u2.id, record_id: r2.id )
Watch.create!(user_id: u3.id, record_id: r4.id )
Watch.create!(user_id: u1.id, record_id: r6.id )
Watch.create!(user_id: u2.id, record_id: r4.id )
Watch.create!(user_id: u3.id, record_id: r3.id )
Watch.create!(user_id: u1.id, record_id: r2.id )
Watch.create!(user_id: u2.id, record_id: r1.id )
Watch.create!(user_id: u3.id, record_id: r1.id )

puts "Watches created!"
