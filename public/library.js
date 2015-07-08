var Orbit = function () {
};

Orbit.prototype.get = function (path, cb, errorCb) {
  var request = new XMLHttpRequest();
  request.open("GET", path);
  request.send();
  request.addEventListener("load", cb.bind(request));
  request.addEventListener("error", errorCb);
};

var orbit = new Orbit();
