const checkAuth = require("../middleware/check-auth");

module.exports = (app, db) => {
	app.get( "/assets", checkAuth, (_, res) =>
		db.Assets.findAll().then( (result) => res.json(result) )
	);

	app.get( "/assets/:id", (req, res) =>
		db.Assets.findByPk(req.params.id).then( (result) => res.json(result))
	);

	app.post( "/assets", (req, res) => 
		db.Shopping_Centers.findByPk(1)
		.then(shopping_centers => {
			shopping_centers.createAsset({
				name: req.body.name,
				dimensions: req.body.dimensions,
				location: req.body.location,
				status: req.body.status,
			})
			.then( (result) => res.json(result) )
		})
	);

};