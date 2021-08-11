let deckID

const newGameBtn = document.getElementById('new-game-btn')
const newCardBtn = document.getElementById('new-card-btn')
const placeCardOne = document.getElementById('card-one')
const placeCardTwo = document.getElementById('card-two')

newGameBtn.addEventListener('click', newGame)

function newGame() {
    console.log('button works')
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
    .then(res => res.json())
    .then(data => {
        newCardBtn.disabled = false;
        deckID = data.deck_id
        console.log(deckID)

    } )
}

newCardBtn.addEventListener('click', newCard)

function newCard() {
    console.log('button works')
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        placeCardOne.innerHTML = `
        <img src="${data.cards[0].image}">
        `
        placeCardOne.innerHTML = `
        <img src="${data.cards[1].image}">
        `

        console.log(data.cards[0].image)
        console.log(data.cards[1].image)
    })
}