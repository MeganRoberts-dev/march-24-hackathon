// Global Variables
let username = "Your";
let score = 0;
let scoreDraco = 0;
let maxScore = 10;


//Play Game function - Some help provided by my mentor Brian O'Hare
function playGame(userChoice) {
  const possibleActions = ['accio', 'petrificus Totalus', 'stupefy', 'expelliarmus', 'confundo'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];

  const result = document.getElementById('result');
  result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}.`;

  if (userChoice === computerChoice) {
    result.textContent += ' WOW, a tie!';
    result.style.color = "white";
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
        alert('Congrats you defeated Draco Well done !!');
        score = 0;
        scoreDraco = 0;
      }
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
      const draco_score = document.getElementById('draco_score');
      draco_score.textContent = `Draco\'s score is ${scoreDraco}` ;
      result.style.color = "green";
  } else {
      result.textContent += ' You lose this round.';
      result.style.color = "red";
      scoreDraco++;
      if(scoreDraco == maxScore) {
        alert('Unlucky! Draco defeated you, better luck next time!');
        scoreDraco = 0;
        score = 0;
      }
      const draco_score = document.getElementById('draco_score');
      draco_score.textContent = `Draco\'s score is ${scoreDraco}` ;
      const score_Div = document.getElementById('score');
      score_Div.textContent = `${username} score is ${score}`;
  }
}


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})