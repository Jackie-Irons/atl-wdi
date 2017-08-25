class CreateArtistSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :artist_songs do |t|
      t.references :artist, foreign_key: true
      t.reference :song

      t.timestamps
    end
  end
end
