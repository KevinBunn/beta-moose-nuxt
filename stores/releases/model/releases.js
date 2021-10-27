const mongoose = require('mongoose');
const { Schema } = mongoose

const releasesSchema = new Schema({
  id: String,
  type: String,
  apple_music_url: String,
  spotify_url: String,
  google_play_url: String,
  amazon_music_url: String,
  tidal_url: String,
  deezer_url: String,
  pandora_url: String,
  youtube_music_url: String
});

mongoose.model('releases', releasesSchema);
