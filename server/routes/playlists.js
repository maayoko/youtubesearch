var express = require('express');
var router = express.Router();
var Playlist = require('../models/playlist');

/* POST add new song to playlist */
router.post('/init', function(req, res, next) {

	Playlist.find({}, function (err, playlists) {

		var newPlaylist = new Playlist();
		newPlaylist.id = 0;
    	newPlaylist.save(function(err) {
       		if (err) {
        	    console.log('Problem occured');
        	}
        	res.status(200).send('New playlist added.');
    	});

	});

});

/* POST add new video to playlist */
router.post('/:videoId', function(req, res, next) {

	Playlist.findOne({ id: 0 }).then(function(playlist) {
  		if (!playlist)
    		return next(new Error('There is no playlist with this id.'));
  		else {
    		playlist.videos.push(req.params.videoId);

	    	playlist.save(function(err) {
	      		if (err) {
	        		console.log('Unable to add video to playlist.');
	        		res.status(200).send('Unable to add video to playlist.');
	      		}
	      		else {
	        		console.log('Video added to playlist.');
	        		res.status(200).send('Video added to playlist.');
	      		}
	    	});
		}
	});
});

/* POST add new video to playlist */
router.post('/:listId/:videoId', function(req, res, next) {

	Playlist.findOne({ id: req.params.listId }).then(function(playlist) {
  		if (!playlist) {	
			var newPlaylist = new Playlist();
			newPlaylist.id = req.params.listId;
			newPlaylist.videos.push(req.params.videoId);
	    	newPlaylist.save(function(err) {
	       		if (err) {
	        	    console.log('Problem occured');
	        	}
	        	res.status(200).send('New playlist added.');
	    	});
  		} else {
    		playlist.videos.push(req.params.videoId);

	    	playlist.save(function(err) {
	      		if (err) {
	        		console.log('Unable to add video to playlist.');
	        		res.status(200).send('Unable to add video to playlist.');
	      		}
	      		else {
	        		console.log('Video added to playlist.');
	        		res.status(200).send('Video added to playlist.');
	      		}
	    	});
		}
	});
});

/* GET get favourites playlist */
router.get('/', function(req, res, next) {

	Playlist.findOne({ id: 0 }).then(function(playlist) {

		var videos = [];
		for (var i = 0; i < playlist.videos.length; i++) {
			videos.push(playlist.videos[i]);
		}

		console.log(videos);

  		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(videos));
	});
});

/* GET get favourites playlist */
router.get('/:listId', function(req, res, next) {

	var listId = 0;
	if (req.params.listId) {
		listId = req.params.listId;
	}

	Playlist.findOne({ id: req.params.listId }).then(function(playlist) {

		var videos = [];
		for (var i = 0; i < playlist.videos.length; i++) {
			videos.push(playlist.videos[i]);
		}

		console.log(videos);

  		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(videos));
	});
});

module.exports = router;
