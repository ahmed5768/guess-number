var input = document.getElementById("input")
var enter = document.getElementById("enter")
var random = Math.floor(Math.random()*20)
var back_side = document.querySelectorAll(".back-side");

console.log(random);

var trials = 0
var currentCardId = null;
var currentRandomNumber = null;
enter.addEventListener("click", function(){
    trials++
    if(input.value == random){
        alert("Correct")
      document.getElementById(currentCardId).classList.toggle("flipped");

        
    }else{
        alert(`oops now you have${3 - trials} trials`)
        if(trials === 3){
            alert(`Game Over and Correct Number is ${random}`)
      document.getElementById(currentCardId).classList.toggle("flipped");

        }
    }


})





function flipCard(cardId) {
    input.value = "";
   
    alert("You have 3 chances to guess the number. Good luck!");
  
    var card = document.getElementById(cardId);
  
    currentRandomNumber = Math.floor(Math.random() * 20 + 1);
    card.querySelector(".back-side").innerHTML = currentRandomNumber;
    console.log(currentRandomNumber);
    currentCardId = cardId;
    trials = 0;
  }