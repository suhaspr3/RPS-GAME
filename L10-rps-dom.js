let score=JSON.parse(localStorage.getItem('score')) || 
{    
  // here localStorage.getitem('score') is used to get the items from the score object, Now this is in the form of a string
  // because of JSON.stringify so to convert it back to a JS Object we use JSON.parse() to convert it back to JS Object 
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
//or this can be written as if(!score)
/*if(score===null)           
{
  score=
  {
  wins:0,
  losses:0,
  ties:0
  };
}*/

function playGame(playerMove)  
//Game logic handling function                                       
{
const computerMove = pickComputerMove();
// after the computer picks its move we are storing the result in a variable called computerMove

let result = '';

  if (playerMove === 'scissors') 
  {
    if (computerMove === 'rock') 
    {
      result = 'You lose.';
    } 
    else if (computerMove === 'paper') 
    {
      result = 'You win.';
    } 
    else if (computerMove === 'scissors') 
    {
      result = 'Tie.';
    }
  }

  else if (playerMove === 'paper') 
  {
    if (computerMove === 'rock') 
    {
      result = 'You win.';
    } 
    else if (computerMove === 'paper') 
    {
      result = 'Tie.';
    } 
    else if (computerMove === 'scissors') 
    {
      result = 'You lose.';
    }         
  }

  else if (playerMove === 'rock') 
  {
    if (computerMove === 'rock') 
    {
      result = 'Tie.';
    } 
    else if (computerMove === 'paper') 
    {
      result = 'You lose.';
    }
    else if (computerMove === 'scissors') 
    {
      result = 'You win.';
    }
  }

  if (result==='You win.')
  {
    score.wins=score.wins+1;
  }
  else if (result==='You lose.')
  {
    score.losses=score.losses+1;
  }
  else if(result==='Tie.')
  {
    score.ties=score.ties+1;
  }

localStorage.setItem('score',JSON.stringify(score));
// now here localStorage only stores strings inside it but here (score) is an object(storing wins,losses,tie at line 28)
// so by using JSON.stringify we are converting the JS Object into a JSON string 

  updateScoreElement();
  moveScoreElement(playerMove, computerMove, result);
}

function updateScoreElement()
  {
  document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
  }

function moveScoreElement(playerMove, computerMove, result)
  {
document.querySelector('.js-moves')
.innerHTML=`You 
<img src="images-rps/${playerMove}-emoji.png" class="move-icon">
<img src="images-rps/${computerMove}-emoji.png" class="move-icon">
Computer`;
document.querySelector('.js-results').innerHTML = result;
}

function pickComputerMove()
// This function is used to pick the computer move                                              
{
const randomNumber = Math.random();                           
// using Math.random() function to generate a randomnumber (between 0 and 1) and store the result in a variable called randomNumber   

let computerMove = '';
//creating an empty string called computerMove to store the move picked by the computer depending on the given condition

if (randomNumber >= 0 && randomNumber < 1 / 3) 
{
computerMove = 'rock';
} 
else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
{
computerMove = 'paper';
} 
else if (randomNumber >= 2 / 3 && randomNumber < 1) 
{
computerMove = 'scissors';
}

return computerMove;
}