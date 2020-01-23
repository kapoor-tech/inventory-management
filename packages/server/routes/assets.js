const checkAuth = require("../middleware/check-auth");

module.exports = (app, db) => {
	// get all assets
	app.get( "/assets", checkAuth, (_, res) =>
		db.Assets.findAll().then( (result) => res.json(result) )
	);
	// get assets by id
	app.get( "/assets/:id", checkAuth, (req, res) =>
		db.Assets.findByPk(req.params.id).then( (result) => res.json(result))
	);
	// Create assets by shopping center id
	app.post( "/assets/:id", checkAuth, (req, res) => 
		db.Shopping_Centers.findByPk(req.params.id)
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
	// update status by asset id
	app.put( "/assets/update-status/:id", checkAuth, (req, res) =>
		db.Assets.update({
			status: req.body.status,
		}, {
			where: {
				id: req.params.id
			}
		})
		.then( (result) => res.json(result) )
	);
	// get assets by shopping center id
	app.get("/assets/shopping-center/:id", checkAuth, (req, res) =>
		db.Assets.findAll({
			where: {
				shoppingCenterId: req.params.id 
			}
		})
		.then( (result) => res.json(result) )
	);
	app.delete( "/assets/:id", checkAuth, (req, res) =>
		db.Assets.destroy({
			where: {
				id: req.params.id
			}
		}).then( (result) => res.json(result) )
	);
};