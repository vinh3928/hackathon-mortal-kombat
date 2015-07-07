var routes = require("routes")(),
  fs = require("fs"),
  db = require("monk")("localhost/hack"),
  questions = db.get("questions"),
  qs = require("qs"),
  view = require("./view"),
  mime = require("mime"),
  qRoutes = require("./routes/questions");

  routes.addRoute("/", qRoutes.landing);
  routes.addRoute("/questions/:id", qRoutes.getAnswer);
  routes.addRoute("/public/*", qRoutes.publicFile);
  module.exports = routes;
