const words = ['JAVASCRIPT', 'HTML', 'CSS', 'PYTHON', 'GITHUB', 'REACT'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let incorrectLetters = [];

// DOM elements
const wordContainer = document.getElementById('word-container');
const incorrectLettersContainer = document.getElementById('incorrect-letters-container');
const hangmanImageContainer = document.getElementById('hangman-image-container');
const resultContainer = document.getElementById('result-container');
const letterInput = document.getElementById('letter-input');

function displayWord() {
    wordContainer.innerHTML = selectedWord
        .split('')
        .map(letter => (correctLetters.includes(letter) ? letter : '_'))
        .join(' ');

    if (!wordContainer.innerHTML.includes('_')) {
        resultContainer.textContent = 'Parabéns! Você venceu!';
    }
}

function displayIncorrectLetters() {
    incorrectLettersContainer.textContent = `Letras Erradas: ${incorrectLetters.join(', ')}`;

    if (incorrectLetters.length === 6) {
        resultContainer.textContent = 'Você perdeu! A palavra era: ' + selectedWord;
    }
}

function guessLetter() {
    const letter = letterInput.value.toUpperCase();

    if (letter.length === 1 && letter.match(/[A-Z]/)) {
        if (correctLetters.includes(letter) || incorrectLetters.includes(letter)) {
            alert('Você já tentou essa letra. Tente outra.');
        } else if (selectedWord.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
        } else {
            incorrectLetters.push(letter);
            displayIncorrectLetters();
        }

        letterInput.value = '';
    } else {
        alert('Por favor, insira uma única letra válida.');
    }
}

displayWord();
