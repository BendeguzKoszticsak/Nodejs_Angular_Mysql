const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var db = require("/home/goofy/node-sql/models");
const controller = require("./controllers/controller");

var cors = require('cors')
var corsOptions = {
  origin: "http://localhost:8081"
};



app.use(cors());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("/home/goofy/node-sql/routes/routes.js")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

