// function play(){
//     const homePage= document.getElementById('home');
//     homePage.classList.add('hidden');

//     const playGround= document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
//  function result(){

//     const playGround= document.getElementById('play-ground');
//     playGround.classList.add('hidden');

//     const scoreBoard = document.getElementById('score');
//     scoreBoard.classList.remove('hidden')
//  }
//  function playAgain(){

//     const playGround= document.getElementById('score');
//     playGround.classList.add('hidden');

//     const scoreBoard = document.getElementById('play-ground');
//     scoreBoard.classList.remove('hidden')
//  }

//  play game
 
function handleKeyboardButtonPress(event){
   const playerPressed= event.key;

   // get the expected to press
   const currentAlphabetElement= document.getElementById('current-alphabet');
   const currentAlphabet= currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed,expectedAlphabet);

   // check matched or not
   if(playerPressed===expectedAlphabet){
      console.log('you get a point');
      const currentScoreElement = document.getElementById('current-score')
      const currentScoreText = currentScoreElement.innerText;
      const currentScore= parseInt(currentScoreText);
      console.log(currentScore);


      const newScore = currentScore + 1;
      currentScoreElement.innerText = newScore;




      removeBackgroundColorByID(expectedAlphabet);
      continueGame();
   }else{
      console.log("you missed. you lost a life");
      // step-1 get the current life number
      const currentLifeElement= document.getElementById('current-life')
      const currentLifeText = currentLifeElement.innerText;
      const currentLife = parseInt(currentLifeText);
   

      // step-2 get the current life number
      const newLife = currentLife -1;
      // step-3 get the current life number
      currentLifeElement.innerText= newLife;
   }

}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)



function continueGame(){
    const alphabet =gatARandomAlphabet();
    console.log(alphabet);
    
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet;

    setBackgroundColorByID(alphabet);

}

 function play(){
    hideElementByID('home');
    showElementById('play-ground')
    continueGame()
 }


 function gatARandomAlphabet(){
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25
    const index =Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
 }