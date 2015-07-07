var router = require("routes")(),
  fs = require("fs"),
  db = require("monk")("localhost/hack"),
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
    if (req.method === "POST") {
      var data = ""
      req.on("data", function (chunk) {
        data += chunk;
      });

      req.on("end", function(){
        var formatData = qs.parse(data);
        var foo = questions.findOne({_id: url.params.id}, function (err, docs) {
          if (docs.rightAnswer === formatData.answer) {
            var template = view.render("game/fights", {});
            res.end(template);
            // return;
          }
            // var template = view.render("game/lose", {});
            // res.end(template);
        });
      });
    }
  },

  publicFile: (req, res, url) => {
    res.setHeader("Content-Type", mime.lookup(req.url));
    fs.readFile("." + req.url, function (err, file) {
      if (err) res.end(404);
      res.end(file);
    });
  }
};

//new XHR post request
//prevent default on the form
  //on form submit add event listener, the event stop default, collect form data that i would've sent package as ajax request and send it off.  response from that will update dom
