const cardsArray = [
    {
        name: 'anchor',
        icon: '<i class="fa-solid fa-anchor"></i>'
    },
    {
        name: 'burger',
        icon: '<i class="fa-solid fa-burger"></i>'
    },
    {
        name: 'car',
        icon: '<i class="fa-solid fa-car-side"></i>'
    },
    {
        name: 'glass',
        icon: '<i class="fa-solid fa-wine-glass"></i>'
    },
    {
        name: 'camera',
        icon: '<i class="fa-solid fa-camera"></i>'
    },
    {
        name: 'music',
        icon: '<i class="fa-solid fa-music"></i>'
    },
    {
        name: 'bell',
        icon: '<i class="fa-solid fa-bell"></i>'
    },
    {
        name: 'trophy',
        icon: '<i class="fa-solid fa-trophy"></i>'
    },
    {
        name: 'heart',
        icon: '<i class="fa-solid fa-heart"></i>'
    },
    {
        name: 'tree',
        icon: '<i class="fa-solid fa-tree"></i>'
    },
    {
        name: 'feather',
        icon: '<i class="fa-solid fa-feather"></i>'
    },
    {
        name: 'moon',
        icon: '<i class="fa-solid fa-moon"></i>'
    },
    {
        name: 'sun',
        icon: '<i class="fa-solid fa-sun"></i>'
    },
    {
        name: 'fish',
        icon: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: 'medal',
        icon: '<i class="fa-solid fa-medal"></i>'
    },
    {
        name: 'anchor',
        icon: '<i class="fa-solid fa-anchor"></i>'
    },
    {
        name: 'burger',
        icon: '<i class="fa-solid fa-burger"></i>'
    },
    {
        name: 'car',
        icon: '<i class="fa-solid fa-car-side"></i>'
    },
    {
        name: 'glass',
        icon: '<i class="fa-solid fa-wine-glass"></i>'
    },
    {
        name: 'camera',
        icon: '<i class="fa-solid fa-camera"></i>'
    },
    {
        name: 'music',
        icon: '<i class="fa-solid fa-music"></i>'
    },
    {
        name: 'bell',
        icon: '<i class="fa-solid fa-bell"></i>'
    },
    {
        name: 'trophy',
        icon: '<i class="fa-solid fa-trophy"></i>'
    },
    {
        name: 'heart',
        icon: '<i class="fa-solid fa-heart"></i>'
    },
    {
        name: 'tree',
        icon: '<i class="fa-solid fa-tree"></i>'
    },
    {
        name: 'feather',
        icon: '<i class="fa-solid fa-feather"></i>'
    },
    {
        name: 'moon',
        icon: '<i class="fa-solid fa-moon"></i>'
    },
    {
        name: 'sun',
        icon: '<i class="fa-solid fa-sun"></i>'
    },
    {
        name: 'fish',
        icon: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: 'medal',
        icon: '<i class="fa-solid fa-medal"></i>'
    }
]
let flippedCards=[];
let matchedPairs = 0;
shuffle();
const gameBoard=document.getElementById('gameBoard');
const score=document.querySelector('p');
display();
function display(){
    cardsArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('card-back');
        card.classList.add('active');
        gameBoard.appendChild(card);
        card.addEventListener('click',flipCard)
    })
}
function shuffle(){
    for(let i=cardsArray.length-1;i>=0;i--){
        let randIndex=Math.floor(Math.random()*(i+1))
        let temp=cardsArray[i];
        cardsArray[i]=cardsArray[randIndex];
        cardsArray[randIndex]=temp;
    }
}
function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
        let cardId=this.getAttribute('id');
    flippedCards.push(this);
    this.classList.remove('card-back');
    this.innerHTML=cardsArray[cardId].icon;
    this.style.backgroundColor = "white";
    if(flippedCards.length==2){
        setTimeout(checkMatch,1000); 
    }
    }
}
function checkMatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name===cardsArray[card2Id].name){
        flippedCards[0].style.backgroundColor = "white";
        flippedCards[0].innerHTML = cardsArray[card1Id].icon;
        flippedCards[0].classList.remove("active");
        flippedCards[1].style.backgroundColor = "white";
        flippedCards[1].innerHTML = cardsArray[card1Id].icon;
        flippedCards[1].classList.remove("active");
        matchedPairs++;
        score.innerText = "Score : "+matchedPairs;
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML = " ";
        flippedCards[0].style.backgroundColor = "rgb(65, 65, 65)"
        flippedCards[1].innerHTML = " ";
        flippedCards[1].style.backgroundColor = "rgb(65, 65, 65)";
    }
    flippedCards = [];
}
function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild);
        }
        gameBoard.innerHTML = "You Won !";
        gameBoard.classList.remove("game");
        gameBoard.classList.add("won");
    }
}
const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click',()=>{
    matchedPairs = 0;
    flippedCards = [];
    score.innerText = "Score : 0";
    while(gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild);
    }
    shuffle();
    display();
    gameBoard.classList.remove('won');
    gameBoard.classList.add('game');
});