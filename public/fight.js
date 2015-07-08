var player = document.getElementsByClassName('progress-bar');
var button = document.getElementById('button');
var scorpion = document.getElementById('sc-standing');
var subZero = document.getElementById('sz-standing');
var submit = document.getElementsByClassName('submit');

// submit.addEventListener('click', function () {
//   orbit.post('/559c34fa71f59ead068a6309', function () {
//     console.log(this.response)
//   })
// })

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

button.addEventListener('click', function () {
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
})

var interval = setInterval(function () {
  player2.lowerHealth();
  player[1].setAttribute("style", "width: " + player2.health + "%")
  subZero.setAttribute("src", "/public/sz-kick.png");
  setTimeout(function () {
    subZero.setAttribute("src", "/public/sz-standing.png")
  }, 300)
  if (player2.health === 0) {
    clearInterval(interval);
    alert("PLAYER 1 WINS")
  }
}, 2000)
