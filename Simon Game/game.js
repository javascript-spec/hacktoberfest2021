var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).one("keypress",function() {
  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Sucess");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      } , 1000 );
    }
  }
  else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
    $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.random();
  randomNumber = (randomNumber*3)+1;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);

$("#"+randomChosenColours).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColours);

}



                                            // Sound

function playSound(name) {
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

                                             // Animation

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100 );
}

                                           //startOver function


function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
