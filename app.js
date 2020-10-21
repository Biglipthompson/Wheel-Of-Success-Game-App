const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('img');
const overlay = document.getElementById('overlay');
let missed = 0;
const phrases = [

    'hello javascript',
    'I love web development',
    'treehouse is awesome',
    'Technology is so fun',
    'Apple is a great company'
];

btnReset.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Getting a random phrase as an array for the div section
const getRandomPhraseAsArray = (arr) => {      // Passing array as an argument to the function
    let phrase = Math.floor(Math.random()*arr.length);
    let words = arr[phrase].split('');
    return words;
};

// Calls function that adds phrase to display
const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay (arr) {
    for(let i = 0; i < arr.length; i++ ){
    let li = document.createElement('li'); // Creating list items or letters in this case
    li.textContent = arr[i];       // The text content is the letter the user chooses 
    phrase.firstElementChild.appendChild(li); // Whichever letter they choose gets appended 
    if( arr[i] === " " ) {   // If the index or chosen letter is a space =>
        li.className = 'space'; //Change class name to space
        } else {
        li.className = "letter"; // Change class to letter 
        }
    }
}

addPhraseToDisplay(phraseArray);


function checkLetter (button){
    let letter = document.querySelectorAll('li'); //Letter spots within the phrase
    let match = null; 
    for (let i = 0; i < letter.length; i++){ // Letter length is the length of the phrase
         if(letter[i].textContent === button.textContent){ //Compares the chosen letter to whatever the button says
            letter[i].className =+ 'show'; // Gives the chosen letter the class name of show
         }
    }
    return match;
};

keyboard.addEventListener('click', (e) => { //keyboard is all the letters responding to clicks
    if (e.target.tagName === 'BUTTON'){ 
        e.target.className === 'chosen' //This adds the button class if chosen is clicked
    } if (e.target.className === 'chosen'){
        e.target.disabled = 'true';
        let letterFound = checkLetter(e.target); // Checks the correct letter off as found
        if (letterFound === null){ //If letter found then it cant be found again
            tries[missed - 1].src = "images/lostHeart.png";
            missed =+ 1;
        }
    }
    checkWin();
});



function checkWin (){
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    let h2 = document.getElementsByTagName('header')

    if (letter.length === show.length){
        overlay.className = 'win';
        h2.textContent = 'you won!';
        overlay.style.display = 'flex';
        btnReset.textContent = 'try again';
        restart();

    }else if (missed > 4 ){
        h2.textContent.display = 'you lose'
        overlay.style.display = 'flex;'
        restart();

        }   
};
















    







