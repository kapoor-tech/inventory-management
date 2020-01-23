const checkAuth = require("../middleware/check-auth");

module.exports = (app) => {
	app.delete('/logout', checkAuth, async (req, res) => {
		const { token } = req.body;
		// TODO: This depends where we'd store the token. Wether in front or backend.
		console.log('DESTROY TOKEN!!!: ', token);
		return res.status(400).send(
			{ errors: [{ message: 'not authenticated' }] }
		);
``});
};