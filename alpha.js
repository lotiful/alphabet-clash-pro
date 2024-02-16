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