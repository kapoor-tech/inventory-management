const bcrypt = require("bcrypt");
const checkAuth = require("../middleware/check-auth");

module.exports = (app, db) => {
	app.get( "/users", checkAuth, (_, res) =>
		db.Users.findAll()
			.then( (result) => res.json(result) )
			.catch( (err) => {
				throw res.json(err);
			})
	);

	app.get( "/users/:id", (req, res) =>
		db.Users.findByPk(req.params.id).then( (result) => res.json(result))
	);

  
	app.post( "/users", async (req, res) => {
		const salt = await bcrypt.genSalt(10);
		db.Users.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: await bcrypt.hash(req.body.password, salt),
			phone: req.body.phone
		})
			.then( (result) => res.json(result))
			.catch( (err) => {
				throw res.json(err.errors.map(msg => msg.message.replace("users.", "")));
			});
	});

	app.put( "/users/:id", (req, res) =>
		db.Users.update({
			title: req.body.title,
			content: req.body.content
		},
		{
			where: {
				id: req.params.id
			}
		})
			.then( (result) => res.json(result) )
			.catch( (err) => {
				console.log(err); // for the time being just to keep an eye.
				throw res.json(err);
			})
	);

	app.delete( "/users/:id", (req, res) =>
		db.Users.destroy({
			where: {
				id: req.params.id
			}
		})
			.then( (result) => res.json(result) )
			.catch( (err) => {
				console.log(err); // for the time being just to keep an eye.
				throw res.json(err);
			})
	);
};