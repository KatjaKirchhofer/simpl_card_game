let deckID
let valueCard1
let valueCard2
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"
]
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

const newGameBtn = document.getElementById('new-game-btn')
const newCardBtn = document.getElementById('new-card-btn')
const placeCardOne = document.getElementById('card-one')
const placeCardTwo = document.getElementById('card-two')
const headlineScoreOne = document.getElementById('scoreOne')
const headlineScoreTwo = document.getElementById('scoreTwo')
const headlineWinner = document.getElementById('winner')

newGameBtn.addEventListener('click', newGame)

function newGame() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
        .then(res => res.json())
        .then(data => {
            alert('Neues Spiel gestartet, ziehe eine Karte!')
            newCardBtn.disabled = false;
            deckID = data.deck_id

        })
}

newCardBtn.addEventListener('click', newCard)

function newCard() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            placeCardOne.innerHTML = `
        <img src="${data.cards[0].image}">
        `
            placeCardTwo.innerHTML = `
        <img src="${data.cards[1].image}">
        `
            checkValueOfCards(data);

        })
}
function checkValueOfCards(data) {

    valueCard1 = cardValues.indexOf(data.cards[0].value) + 2
    valueCard2 = cardValues.indexOf(data.cards[1].value) + 2

    checkScore();
}

function checkScore() {
    if (valueCard1 > valueCard2) {
        console.log('player1')
        scorePlayerOne++
        headlineScoreOne.innerHTML =`
         <h3>Computer: ${scorePlayerOne}</h2>
        ` 
        headlineWinner.textContent = 'Punkt für den Computer'

    } else if (valueCard1 < valueCard2) {
        console.log('player2')
        scorePlayerTwo++
        headlineScoreTwo.innerHTML =`
        <h3>Spieler: ${scorePlayerTwo}</h2>
       `
        headlineWinner.textContent = 'Punkt für den Spieler'
    } else {
        console.log('equal')
        headlineWinner.textContent = 'Gleichstand'
    }
    checkWinner()
}
function checkWinner() {

}