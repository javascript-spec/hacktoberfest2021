let noOfMatch = 0;
let playerScore = 0;
let computerScore = 0;
let drawMatch = 0;
let playerChoice;
let computerChoice;
let matchWinner;

// To store match results
let resultsOfMatch = [];

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissor';

const PLAYER_WON = 'Player';
const COMPUTER_WON = 'Computer';
const MATCH_DRAW = 'draw';

const ROCK_ICON = `
<svg viewBox="0 0 23 20" style="width: 30px">
<path
  d="M21.048 3.704h-5.492v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h12.096l1.13-1.13 1.48-9.918 1.156-.778V4.878l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H6.974l-5.493-5.493V6.974l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308V7.38z"
></path>
</svg>`;

const PAPER_ICON = `<svg viewBox="0 0 32 20" style="width: 30px">
<path
  d="M23.704 18.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V8.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434V1.174L18.456 0H6.359L0 6.36v7.28L6.36 20h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493V6.974l5.493-5.493h10.867l.307.308v.867L17.1 3.704h-5.989v1.481H27.1l.307.308v1.914h-11.11V8.89h13.025l.308.307v1.608l-.308.307H16.296v1.482h10.37v1.914l-.307.308H16.296v1.481h5.926v1.915l-.307.308H6.975z"
></path>
</svg>`;

const SCISSOR_ICON = `<svg viewBox="0 0 31 20" style="width: 30px">
<path
  d="M30 11.563l-6.104-2.674h5.297l1.177-1.174V4.878l-1.174-1.174h-13.64v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L30 11.563zM28.037 14.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37L1.48 13.027V6.974l5.493-5.493h6.793l.307.308v1.915H10.37v1.481h18.211l.308.308V7.1l-.308.307H19.26V8.47l9.482 4.167.1.37-.804 1.393z"
></path>
</svg>
`;

// To Add Animation to Hand Image
let addHandAnimation = () => {
  for (img of handImg) {
    img.preventDefault;
    img.classList.remove('animation');
    void img.offsetWidth;
    img.classList.add('animation');

    //Hand Image during the animation
    img.firstElementChild.src = `img/hand.png`;
  }
};

//User Choice
let getPlayerChoice = (index) => {
  switch (index + 1) {
    case 1:
      playerChoice = ROCK;
      break;
    case 2:
      playerChoice = PAPER;
      break;
    case 3:
      playerChoice = SCISSOR;
      break;
  }
};

//Computer Random Choice
let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  let index = randomNumber % 3;
  switch (index + 1) {
    case 1:
      computerChoice = ROCK;
      break;
    case 2:
      computerChoice = PAPER;
      break;
    case 3:
      computerChoice = SCISSOR;
      break;
  }
};

// Find the result of the game
let getResult = () => {
  if (playerChoice === computerChoice) {
    drawMatch++;
    matchWinner = MATCH_DRAW;
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSOR) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSOR && computerChoice === PAPER)
  ) {
    playerScore++;
    matchWinner = PLAYER_WON;
  } else {
    computerScore++;
    matchWinner = COMPUTER_WON;
  }
};

//Print Score on ScoreBoard
let updateScoreBoard = () => {
  gameScorePlayer.innerText = playerScore;
  gameScoreTie.innerText = drawMatch;
  gameScoreComputer.innerText = computerScore;
};

let writeToResults = (pChoice, cChoice, winner, roundNumber) => {
  let result = {
    pChoice: pChoice,
    cChoice: cChoice,
    winner: winner,
    roundNumber: roundNumber,
  };
  resultsOfMatch.push(result);
};

let getChoiceIcon = (userChoice) => {
  let userChoiceIcon;
  switch (userChoice) {
    case ROCK:
      userChoiceIcon = ROCK_ICON;
      break;
    case PAPER:
      userChoiceIcon = PAPER_ICON;
      break;
    case SCISSOR:
      userChoiceIcon = SCISSOR_ICON;
      break;
  }
  return userChoiceIcon;
};

//Print log
let logResult = (resultsOfMatch) => {
  let length = resultsOfMatch.length - 1;
  for (let i = 0; i < scoreLog.length; i++) {
    if (length > 0 || i === 0) {
      let pChoiceIcon = getChoiceIcon(resultsOfMatch[length - i].pChoice);
      let cChoiceIcon = getChoiceIcon(resultsOfMatch[length - i].cChoice);
      let winner = resultsOfMatch[length - i].winner;
      let roundNumber = resultsOfMatch[length - i].roundNumber;
      scoreLog[i].style.display = 'flex';
      scoreLog[i].children[0].innerHTML = pChoiceIcon;
      scoreLog[i].children[1].innerText = roundNumber;
      scoreLog[i].children[2].innerHTML = cChoiceIcon;
      if (winner == PLAYER_WON) {
        scoreLog[i].children[0].classList.add('winner');
      } else {
        scoreLog[i].children[0].classList.remove('winner');
      }
      if (winner == COMPUTER_WON) {
        scoreLog[i].children[2].classList.add('winner');
      } else {
        scoreLog[i].children[2].classList.remove('winner');
      }
    }
  }
};

for (let i = 0; i < playerBtns.length; i++) {
  playerBtns[i].addEventListener('click', () => {
    noOfMatch++;
    addHandAnimation();
    getPlayerChoice(i);
    getComputerChoice();
    getResult();
    writeToResults(playerChoice, computerChoice, matchWinner, noOfMatch);
    //Change hand to rock, paper or scisor
    setTimeout(() => {
      logResult(resultsOfMatch);
      handImg[0].firstElementChild.src = `img/${playerChoice}.png`;
      handImg[1].firstElementChild.src = `img/${computerChoice}.png`;
      updateScoreBoard();
      gameRound.innerText = `Round ${noOfMatch + 1}`;
    }, 800);
  });
}
