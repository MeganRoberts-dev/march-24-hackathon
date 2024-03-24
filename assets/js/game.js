// Global Variables
let username = "Your";
let score = 0;
let scoreDraco = 0;
let maxScore = 10;
var resetButton = document.getElementById("resetButton")

   

//Play Game function - Some help provided by my mentor Brian O'Hare
function playGame(userChoice) {
  const possibleActions = ['accio', 'petrificus Totalus', 'stupefy', 'expelliarmus', 'confundo'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];

  const result = document.getElementById('result');
  result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}.`;
  gameTitle.style.display = "none";
  
  if (userChoice === computerChoice) {
    result.textContent += ' WOW, a tie!';
    result.style.color = "black";
} else if (
    (userChoice === 'expelliarmus' && computerChoice === 'confundo') ||
    (userChoice === 'expelliarmus' && computerChoice === 'stupefy') ||
    (userChoice === 'accio' && computerChoice === 'expelliarmus') ||
    (userChoice === 'accio' && computerChoice === 'petrificus Totalus') ||
    (userChoice === 'stupefy' && computerChoice === 'accio') ||
    (userChoice === 'stupefy' && computerChoice === 'confundo') ||
    (userChoice === 'confundo' && computerChoice === 'accio') ||
    (userChoice === 'confundo' && computerChoice === 'petrificus Totalus') ||
    (userChoice === 'petrificus Totalus' && computerChoice === 'stupefy') ||
    (userChoice === 'petrificus Totalus' && computerChoice === 'expelliarmus')
    ) {
      result.textContent += ' YOU WIN THIS ROUND!';
      score++;
      if(score == maxScore) {
        swal('Congrats!!', 'you defeated Draco Well done !!','success' ,{
        button:'WOOHOO'
        });
        score = 0;
        scoreDraco = 0;
      }
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
      const draco_score = document.getElementById('comp_score');
      draco_score.textContent = `Computer\'s score is ${compScore}` ;
      result.style.color = "green";
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
       
});
const gameTitle = document.getElementById("gameTitle");

