module.exports = (app) => {
	app.get( "/", (_, res) => res.json({ message: "Welcome dev" }));
};