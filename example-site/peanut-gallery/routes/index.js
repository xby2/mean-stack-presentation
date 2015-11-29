var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Post = mongoose.model("Post");


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
	/*Post.find(function(err, posts) {
		if (err) {
			return next(err);
		}

		res.json(posts);
	});*/
});

router.get('/posts', function(req, res, next) {
	Post.find(function(err, posts) {
		if (err) {
			return next(err);
		}

		res.json(posts);
	});
});

router.post("/posts", function(req, res, next) {
	var post = new Post(req.body);

	post.save(function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

router.param("post", function(req, res, next, id) {
	var query = Post.findById(id);

	query.exec(function(err, post) {
		if (err) {
			return next(err);
		}
		if (!post) {
			return next(new Error("Nothing."));
		}

		req.post = post;

		return next();
	});
});


module.exports = router;
