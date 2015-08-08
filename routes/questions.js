require("dotenv").load();
var router = require("routes")(),
  fs = require("fs"),
  db = require("monk")(process.env.MONGOLAB_URI),
  questions = db.get("questions"),
  qs = require("qs"),
  view = require("./../view"),
  mime = require("mime");


module.exports = {
  landing: (req, res, url) => {
    res.setHeader("Content-Type", "text/html");
    if (req.method === "GET") {
      questions.find({}, function (err, data) {
        var template = view.render("game/fights", {questions: data});
        res.end(template);
      });
    }
  },

  getAnswer: (req, res, url) => {
    res.setHeader("Content-Type", "text/html");
    if (req.method === "GET") {
      res.setHeader("Content-Type", "appliation/json");
      questions.findOne({_id: url.params.id}, function (err, doc) {
        res.end(doc.rightAnswer);
      });
    }
  },

  publicFile: (req, res, url) => {
    res.setHeader("Content-Type", mime.lookup(req.url));
    fs.readFile("." + req.url, function (err, file) {
      if (err) res.end(404);
      res.end(file);
    });
  },

  getQuestions: (req, res, url) => {
    res.setHeader("Content-Type", "text/html");
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      questions.find({}, function (err, doc) {
        res.end(JSON.stringify(doc));
      });

    }
  }
};

//new XHR post request
//prevent default on the form
  //on form submit add event listener, the event stop default, collect form data that i would've sent package as ajax request and send it off.  response from that will update dom
