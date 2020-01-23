const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("../config/config");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
		req.userData = decoded;
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
		next();
	} catch (error) {
		return res.status(401).json({
			message: "Auth failed"
		});
	}
};