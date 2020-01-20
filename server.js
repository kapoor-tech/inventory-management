const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");

const apiUser = require("./routes/users");
const apiShoppingCenters = require("./routes/shopping-centers");
const apiLogin = require("./routes/login");
const apiLogout = require("./routes/logout");

const cors = require("cors");

/* Create user into database test. */

// User.create({
// 	first_name: "Ashish",
// 	last_name: "Kapoor",
// 	password: "password",
// 	email: "ashish@ashish.com",
// 	phone: "9999999999"
// }).then(user => { console.log('asd: ', user);
// }).then(() => console.log('worked!'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors());

// Routes
apiUser(app, db);
apiShoppingCenters(app, db);
apiLogin(app, db);
apiLogout(app, db);

app.get("/", (_, res) => res.sendStatus(200));

module.exports = app;
