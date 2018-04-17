const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits.js');
const Mailer = require('../services/Mailer.js');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate.js');

const Post = mongoose.model('posts');

module.exports = app => {

	// app.get('/api/posts', requireLogin, async(req, res) => {
	//
	// 	const surveys = await Survey.find({ _user:req.user.id })
	// 		.select({ recipients: false });
	// 	//req.user user is here
	// 	res.send(surveys);
	// });
	//
	// app.get('/api/surveys/:surveyId/:choice', (req, res) => {
	//
	// 	res.send('Thanks for voting');
	// });
	//
	// app.post('/api/surveys/webhooks', (req, res) => {
	//
	// 	const p = new Path('/api/surveys/:surveyId/:choice');
	//
	// 	_.chain(req.body)
	// 		.map(({ email, url }) => {
	// 			const match = p.test(pathname);
	//
	// 			if(match) {
	// 				return { email, surveyId: match.surveyId, choice: match.choice};
	// 			}
	// 		})
	// 		.compact()
	// 		.uniqBy('email', 'surveyId')
	// 		.each(({ surveyId, email, choice }) => {
	// 			Survey.updateOne({
	// 				_id: surveyId,
	// 				recipients: {
	// 					$elemMatch: { email: email, responded:false }
	// 				}
	// 			}, {
	// 				$inc: { [choise]: 1},
	// 				$set: { 'recipients.$.responded':true },
	// 				lastResponded: new Date()
	// 			}).exec()
	// 		})
	// 		.value();
	//
	// 	res.send({});
	// });

	app.post('/api/posts', requireLogin, async(req, res) => {

		const { description, location, image } = req.body;
        console.log(req.body);

		const post = new Post({

            image,
			description,
			location,
			//recipients: recipients.split(',').map(email => ({email : email.trim() })),
			_user: req.user.id,
			dateCreated: Date.now()
	});

		try {

			await survey.save();
			//req.user.credits -= 1;

			res.send(user);

		} catch (err) {

			res.status(422).send(err);
		}
	});
};
