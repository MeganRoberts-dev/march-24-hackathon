// Global Variables
let username = "Your";
let score = 0;
let scoreDraco = 0;
let maxScore = 10;
var resetButton = document.getElementById("resetButton")
const gameTitle = document.getElementById("gameTitle");
const gameBlurb = document.getElementById("gameBlurb");
const opponentName = "The Universe";

//Play Game function - Some help provided by my mentor Brian O'Hare
function playGame(userChoice) {
  const possibleActions = ['super charged', 'energised', 'calm', 'tired', 'snooze mode'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];
  const jsConfetti = new JSConfetti()


  const result = document.getElementById('result');
  result.innerHTML = `You chose <span class="user-choice">${userChoice}</span>, ${opponentName} chose <span class="opponent-choice">${computerChoice}</span>.`;
  gameTitle.style.display = "none";
  gameBlurb.style.display = "none";

  if (userChoice === computerChoice) {
    result.innerHTML += '<br><br>WOW, A TIE!';
    result.style.color = "black";
  } else if (
    // Snooze Mode beats Energised and Tired
    (userChoice === 'snooze mode' && (computerChoice === 'energised' || computerChoice === 'tired')) ||
    // Calm beats Snooze Mode and Super Charged
    (userChoice === 'calm' && (computerChoice === 'snooze mode' || computerChoice === 'super charged')) ||
    // Tired beats Calm and Super Charged
    (userChoice === 'tired' && (computerChoice === 'calm' || computerChoice === 'super charged')) ||
    // Energised beats Calm and Tired
    (userChoice === 'energised' && (computerChoice === 'calm' || computerChoice === 'tired')) ||
    // Super Charged beats Energised and Snooze Mode
    (userChoice === 'super charged' && (computerChoice === 'energised' || computerChoice === 'snooze mode'))
  ) {
    result.innerHTML += '<br><br>YOU WIN THIS ROUND!';
    score++;
    if (score == maxScore) {
      jsConfetti.addConfetti();
      swal('Congrats!!', `You defeated ${opponentName}! Well done!!`, 'success', {
        button: 'WOOHOO'
      });
      score = 0;
      scoreDraco = 0;
    }
    const score_Div = document.getElementById('score');
    score_Div.textContent = `${username} score is ${score}`;
    const draco_score = document.getElementById('draco_score');
    draco_score.textContent = `${opponentName}'s score is ${scoreDraco}`;
    result.style.color = "green";
  } else {
    result.innerHTML += '<br><br>YOU LOSE THIS ROUND!';
    result.style.color = "black";
    scoreDraco++;
    if (scoreDraco == maxScore) {
      swal('Unlucky!', `${opponentName} won, better luck next time!`, 'error', {
        button: 'Hell nah...'
      });
      scoreDraco = 0;
      score = 0;
    }
    const draco_score = document.getElementById('draco_score');
    draco_score.textContent = `${opponentName}'s score is ${scoreDraco}`;
    const score_Div = document.getElementById('score');
    score_Div.textContent = `${username} score is ${score}`;
  }
}
//* Reset button *//
resetButton.addEventListener("click", function () {
  result.innerText = "";
  scoreDraco = 0;
  score = 0;
  const draco_score = document.getElementById('draco_score');
  draco_score.textContent = `${opponentName}'s score is ${scoreDraco}`;
  const score_Div = document.getElementById('score');
  score_Div.textContent = `${username} score is ${score}`;

});