var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Server up: http://localhost:" + PORT);
});