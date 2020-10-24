const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('img');
const overlay = document.getElementById('overlay');
let missed = 0;
const phrases = [

    'hello javascript',
    'i love web development',
    'treehouse is awesome',
    'technology is so fun',
    'apple is a great company'
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
            letter[i].className = 'show letter'; // Gives the chosen letter the class name of show
            match += letter[i].textContent;
         }
    }
    return match;
};


keyboard.addEventListener('click', (e) => { 
    if (e.target.tagName === 'BUTTON'){    
        e.target.className = "chosen"; //adds class of chosen if button is clicked
    } if (e.target.className === 'chosen'){
        e.target.disabled = "true"; //disables button if it has been selected
        let letterFound = checkLetter(e.target); 
        if (letterFound === null){
            missed += 1;
            tries[missed - 1 ].src = "images/lostHeart.png"; // removes the hearts
        }
        checkWin();
    }  
});



function checkWin (){
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    let h2 = document.querySelector('.title')

    if (letter.length === show.length){
        overlay.className = 'win';
        h2.textContent = 'you win!!!';
        overlay.style.display = 'flex';
        btnReset.textContent = 'play again?';

    }else if (missed > 4 ){
        overlay.className = 'lose';
        h2.textContent = 'You lose!!!';
        overlay.style.display = 'flex';
     }   
};


    







