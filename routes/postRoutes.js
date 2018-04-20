const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin.js');

const Post = mongoose.model('posts');

module.exports = app => {

	app.post('/api/posts', requireLogin, async(req, res) => {

		const { description, location } = req.body;
        console.log(req.body);

		const post = new Post({

			description,
			location,
			_user: req.user.id,
			dateCreated: Date.now()

		});

		console.log(post);

		try {

			await post.save();
			res.send(post);

		} catch (err) {

			res.status(422).send(err);
		}
	});


	app.get('/api/FrontPageList', requireLogin, async(req, res) => {

		const posts = await Posts.find();
		//req.user user is here
		res.send(posts);
	});
};
