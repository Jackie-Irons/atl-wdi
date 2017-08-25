Artist.destroy_all

rihanna = Artist.create(name: 'Rihanna')

rihanna.songs = [
Song.create(title: rihanna_id, title: "Umbrella", genre: "Pop")
Song.create(title: rihanna_id, title: "Shake It Off", genre: "Pop")
Song.create(title: rihanna_id, title: "Pressure", genre: "Rock")
Song.create(title: rihanna_id, title: "Hotline Bling", genre: "Rap")

]