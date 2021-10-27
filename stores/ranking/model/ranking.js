const mongoose = require('mongoose');
const { Schema } = mongoose

const rankingSchema = new Schema({
    score: Number,
    song_name: String
});

mongoose.model('rankings', rankingSchema);
