// Global Variables
let username = "Your";
let score = 0;
let scoreDraco = 0;
let maxScore = 10;
var resetButton = document.getElementById("resetButton")

   

//Play Game function - Some help provided by my mentor Brian O'Hare
function playGame(userChoice) {
  const possibleActions = ['super charged', 'energised', 'calm', 'tired', 'snooze mode'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];
  const jsConfetti = new JSConfetti()


  const result = document.getElementById('result');
  result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}.`;
  gameTitle.style.display = "none";
  
  if (userChoice === computerChoice) {
    result.textContent += ' WOW, a tie!';
    result.style.color = "black";
} else if (
    (userChoice === 'tired' && computerChoice === 'snooze mode') ||
    (userChoice === 'tired' && computerChoice === 'calm') ||
    (userChoice === 'super charged' && computerChoice === 'tired') ||
    (userChoice === 'super charged' && computerChoice === 'energised') ||
    (userChoice === 'calm' && computerChoice === 'super charged') ||
    (userChoice === 'calm' && computerChoice === 'snooze mode') ||
    (userChoice === 'snooze mode' && computerChoice === 'super charged') ||
    (userChoice === 'snooze mode' && computerChoice === 'energised') ||
    (userChoice === 'energised' && computerChoice === 'calm') ||
    (userChoice === 'energised' && computerChoice === 'tired')
    ) {
      result.textContent += ' YOU WIN THIS ROUND!';
      score++;
      if(score == maxScore) {
        jsConfetti.addConfetti()
        swal('Congrats!!', 'you defeated Draco Well done !!','success' ,{
        button:'WOOHOO'
        });
        score = 0;
        scoreDraco = 0;
      }
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
      const draco_score = document.getElementById('draco_score');
      draco_score.textContent = `Computer\'s score is ${scoreDraco}` ;
      result.style.color = "black";
  } else {
      result.textContent += ' You lose this round.';
      result.style.color = "black";
      scoreDraco++;
      if(scoreDraco == maxScore) {
        swal('Unlucky!', 'The computer won, better luck next time!','error',{
          button:'Hell nah...'
        });
        scoreDraco = 0;
        score = 0;
      }
      const draco_score = document.getElementById('draco_score');
      draco_score.textContent = `Draco\'s score is ${scoreDraco}` ;
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
  }
}
//* Reset button *//
resetButton.addEventListener("click", function() {
  result.innerText = "";
  scoreDraco = 0;
        score = 0;
      const draco_score = document.getElementById('draco_score');
      draco_score.textContent = `Draco\'s score is ${scoreDraco}` ;
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
       
});
const gameTitle = document.getElementById("gameTitle");


