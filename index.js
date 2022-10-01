let cards = [] // This is Array with [] ordered list numbers or letters like [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// comment : this code is for showing of starting a game
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    Name: Peri,
    chips: 145

}
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor ( Math.random()*13 ) + 1 //1-10
if (randomNumber > 10) {
    return 10
} else if (randomNumber === 10 ) {
    return 11
} else {
    return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()  // that way replace old function without motifying function name
}


function renderGame() {
    cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
   if (sum < 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 20) {
    message = "Yipe you've got Blackjack"
    hasBlackJack = true
} else if (sum > 20) {
    message = "You're out of the game"
    isAlve = false
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
   let card = getRandomCard()
   sum += card
   cards.push(card)
console.log(cards)
renderGame()
}
}

messageEl.textContent = message

    console.log(message)}