// calculate number of buttons 
var number_btns = document.querySelectorAll(".btn").length;

// add even tlistener to each button 
for (var i = 0; i < number_btns; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    playSound(this.innerHTML);
    addanimation(this.innerHTML);
  });
}

// auto genarte music 
document.querySelector(".random").addEventListener("click", function () {
  var a = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
//   set interval for each random tone 
  var set = setInterval(() => {
    var random_number = Math.floor(Math.random() * 26);
    document.querySelector("." + a[random_number]).click();
  }, 400);
//   clear the interval
  document.querySelector(".stop").addEventListener("click", function () {
    clearInterval(set);
  });
});

// event listener for key press events 
document.addEventListener("keypress", function (event) {
  console.log(event.key);
  playSound(event.key);
  addanimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "q":
      var sound = new Audio("./sounds/a_note.mp3");
      sound.play();
      break;
    case "w":
      var sound = new Audio("./sounds/bell.mp3");
      sound.play();
      break;

    case "e":
      var sound = new Audio("./sounds/yt1s (mp3cut.net) (a).mp3");
      sound.play();
      break;

    case "r":
      var sound = new Audio("./sounds/glimmer.mp3");
      sound.play();
      break;

    case "t":
      var sound = new Audio("./sounds/tom-4.mp3");
      sound.play();
      break;

    case "y":
      var sound = new Audio("./sounds/tom-3.mp3");
      sound.play();
      break;

    case "u":
      var sound = new Audio("./sounds/yt1s (mp3cut.net) (b).mp3");
      sound.play();
      break;

    case "i":
      var sound = new Audio("./sounds/C.mp3");
      sound.play();
      break;

    case "o":
      var sound = new Audio("./sounds/D.mp3");
      sound.play();
      break;

    case "p":
      var sound = new Audio("./sounds/g_note.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("./sounds/F.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("./sounds/Db.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("./sounds/yt1s (mp3cut.net) (c).mp3");
      sound.play();
      break;

    case "f":
      var sound = new Audio("./sounds/f_note.mp3");
      sound.play();
      break;

    case "g":
      var sound = new Audio("./sounds/note1.wav");
      sound.play();
      break;

    case "h":
      var sound = new Audio("./sounds/kick-bass.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("./sounds/mixkit-flute-alert-2307.wav");
      sound.play();
      break;

    case "k":
      var sound = new Audio("./sounds/note1.wav");
      sound.play();
      break;

    case "l":
      var sound = new Audio("./sounds/note2.wav");
      sound.play();
      break;

    case "z":
      var sound = new Audio("./sounds/note3.wav");
      sound.play();
      break;

    case "x":
      var sound = new Audio("./sounds/note4.wav");
      sound.play();
      break;

    case "c":
      var sound = new Audio("./sounds/note4.wav");
      sound.play();
      break;

    case "v":
      var sound = new Audio("./sounds/note5.wav");
      sound.play();
      break;

    case "b":
      var sound = new Audio("./sounds/note6.wav");
      sound.play();
      break;

    case "n":
      var sound = new Audio("./sounds/tom-3.mp3");
      sound.play();
      break;

    case "m":
      var sound = new Audio("./sounds/snare.mp3");
      sound.play();
      break;
  }
}
// animation function 
function addanimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
