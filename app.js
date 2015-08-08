var http = require("http"),
  router = require("./router"),
  url = require("url");


var server = http.createServer(function (req, res) {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, {"Content-Type": "image/x-icon"});
    res.end();
    return;
  }

  var path = url.parse(req.url).pathname;
  var currentRoute = router.match(path);
  if (currentRoute) {
    currentRoute.fn(req, res, currentRoute);
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("We Couldn't Get The Ajax Request. :( SO CLOSE");
  }
});

server.listen(process.env.LOCAL || 8080, function (err) {
  if (err) console.log("error", err);
  console.log("listening on 8080");

});
