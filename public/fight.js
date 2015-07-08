var player = document.getElementsByClassName('progress-bar');
var button = document.getElementById('button');
var scorpion = document.getElementById('sc-standing');
var subZero = document.getElementById('sz-standing');
var forms = document.getElementById('forms');

function mySubmit () {
  return false

}

forms.addEventListener("click", function (e) {
  if (e.target.className === "submit") {
    orbit.get("/" + e.target.id + ".json", function () {
      var data = this.response;
      for (var i = 0; i < e.target.form.length; i ++) {
        if (e.target.form[i].checked) {
          if (e.target.form[i].value === data) {

            player1.lowerHealth();
            player[0].setAttribute("style", "width: " + player1.health + "%")
            scorpion.setAttribute("src", "/public/sc-kick.png");
            setTimeout(function () {
              scorpion.setAttribute("src", "/public/scorpion-standing.png")
            }, 300);
            if (player1.health === 0) {
              alert("PLAYER 2 WINS")
              clearInterval(interval);
            }
          }
        }
      }
    });
  }

});

player1 = {
  health: 100,
  lowerHealth: function () {
    this.health = this.health - 10;
  }
}

player2 = {
  health: 100,
  lowerHealth: function () {
    this.health = this.health - 10;
  }
}

var interval = setInterval(function () {
  if (player2.health > 0) {
    player2.lowerHealth();
    player[1].setAttribute("style", "width: " + player2.health + "%")
    subZero.setAttribute("src", "/public/sz-kick.png");
    setTimeout(function () {
      subZero.setAttribute("src", "/public/sz-standing.png")
    }, 300)
  } else {
    clearInterval(interval);
    alert("PLAYER 1 WINS")
  }
}, 2000)
