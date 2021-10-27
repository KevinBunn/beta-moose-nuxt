const mongoose = require('mongoose');
const { Schema } = mongoose

const songsSchema = new Schema({
    release_id: String,
    name: String
});

mongoose.model('songs', songsSchema);
