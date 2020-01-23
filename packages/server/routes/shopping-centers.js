const checkAuth = require("../middleware/check-auth");

module.exports = (app, db) => {
	app.get( "/shopping-centers", checkAuth, (_, res) =>
		db.Shopping_Centers.findAll().then( (result) => res.json(result) )
	);

	app.get( "/shopping-centers/:id", checkAuth, (req, res) =>
		db.Shopping_Centers.findByPk(req.params.id).then( (result) => res.json(result))
	);

	app.post( "/shopping-centers", checkAuth, (req, res) => 
		db.Shopping_Centers.create({
			name: req.body.name,
			address: req.body.address
		}).then( (result) => res.json(result) )
	);

	app.put( "/shopping-centers/:id", checkAuth, (req, res) =>
		db.Shopping_Centers.update({
			name: req.body.name,
			address: req.body.address
		},
		{
			where: {
				id: req.params.id
			}
		}).then( (result) => res.json(result) )
	);

	app.delete( "/shopping-centers/:id", checkAuth, (req, res) =>
		db.Shopping_Centers.destroy({
			where: {
				id: req.params.id
			}
		}).then( (result) => res.json(result) )
	);
};