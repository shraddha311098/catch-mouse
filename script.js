var score = 0;
var last = 0;
setInterval(interval, 600)
function interval() {
    var image;
    image = document.createElement("img");
    image.setAttribute("src", "rat.png");
    image.setAttribute("onClick", "scoreCount();");
    var arr = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];
    var randomNumber = Math.floor(Math.random() * 9);
    document.getElementById(arr[last]).innerHTML = '';
    document.getElementById(arr[randomNumber]).appendChild(image);
    last = randomNumber;
}

function scoreCount() {
    score += 10;
    document.getElementById('score');
    document.getElementById('showscore').innerHTML = 'your score is:' + score;
}

var timeleft = 60;
var timer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "Finished";
        document.getElementById("result").style.display = "block";
        document.getElementById("game").style.display = "none";
        getCookie(score);
        setCookie(score);
    } else {
        document.getElementById("time").innerHTML = timeleft + "seconds remaining";
        document.getElementById('highScore').innerHTML = document.cookie;
    }
    timeleft -= 1;
}, 1000);

function menu() {
    location.replace("index.html");
}

function getCookie(score) {
    var highScore = document.cookie.split("=")[1];
    if (highScore == undefined) {
        highScore = 0;
    }
    if (score > highScore) {
        document.getElementById('resultHighScore').innerHTML = 'Congratulation You made High Score ' + score;
    }
}
function setCookie(score) {
    var highScore = document.cookie.split("=")[1];
    if(highScore==undefined)
    {
      highScore=0;
    }
    if(score > highScore){
    document.cookie= 'highScore=' +score;
     }
      console.log(document.cookie);
      document.getElementById('highScore').innerHTML = document.cookie;
  }
  
