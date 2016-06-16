var mongoose = require('mongoose');

var playlistSchema = mongoose.Schema({
	id: Number,
	videos: []
});

module.exports = mongoose.model('YTPlaylist', playlistSchema);
