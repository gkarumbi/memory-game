document.addEventListener('DOMContentLoaded',()=>{
    //card option
    const cardArray =[
        {
            name: 'fries',
            img : './images/fries.png'
        },
        {
            name: 'fries',
            img : './images/fries.png'
        },
        {
            name: 'cheeseburger',
            img : './images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img : './images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img : './images/hotdog.png'
        },
        {
            name: 'hotdog',
            img : './images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img : './images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img : './images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img : './images/milkshake.png'
        },
        {
            name: 'milkshake',
            img : './images/milkshake.png'
        },
        {
            name: 'pizza',
            img : './images/pizza.png'
        },
        {
            name: 'pizza',
            img : './images/pizza.png'
        }
    ];


//create board
cardArray.sort(()=> 0.5 -Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen =[];
var cardsChosenID = [];
var cardWons = [];
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src','./images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);

    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You have found a match');
        cards[optionOneID].setAttribute('src','images/white.png');
        cards[optionTwoID].setAttribute('src','images/white.png');
        cardWons.push(cardsChosen);

    }else{
        cards[optionOneID].setAttribute('src','images/blank.png');
        cards[optionTwoID].setAttribute('src','images/blank.png');
        alert('Sorry try again');

    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardWons.length;
    if(cardWons.length ===cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all';

    }
}

//flip your card

function flipCard(){
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);
    if (cardsChosen.length ===2){
        setTimeout(checkForMatch, 500);

    }
}



createBoard();

flipCard();














} );


