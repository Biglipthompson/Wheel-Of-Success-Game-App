const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

btnReset.addEventListener('click', () => {
    overlay.style.display = 'none';
    
});


const phrases = [
    'hello javascript',
    'I love web development',
    'treehouse is awesome',
    'Technology is so fun',
    'Apple is a great company'
];


// Getting a random phrase as an array for the div section
const getRandomPhraseAsArray = (arr) => {
    let phrase = Math.floor(Math.random())*arr.length;
    let words = arr[phrases].split('');
    return words;
};


function addPhraseToDisplay (arr) {
    for(let i = 0; i < arr.length; i++ ){
    let li = document.createElement('li');
    li.textContent = arr[i];
    phrase.firstElementChild.appendChild(li);
    if( arr[i] === " " ) {
        li.className = 'space';
        } else {
        li.className = "letter";
        }
    }
}

// Calls function that adds phrase to display
const phraseArray = getRandomPhraseAsArray(phrases);

function checkLetter (button){
    let letter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < letter.length i++){
         if(letter[i].textContent === button.textContent){
            letter[i].className =+ 'show';
            
         }
    }
};









    







