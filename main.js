document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("next").style.visibility = "hidden";
    let playerArray=[];
    let computerArray=[];
    
    document.getElementById("deal").addEventListener("click",function(){
        deck.load();
        
        for (let i = 0; i < 26; i++) {
            random = Math.floor(Math.random()*52)
            while(deck.cardArray[random].inuse === true){
            random = Math.floor(Math.random()*52)
            }
            playerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;

            random = Math.floor(Math.random()*52)
            while(deck.cardArray[random].inuse === true){
            random = Math.floor(Math.random()*52)
            }
            computerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;
        }
        
        document.getElementById("deal").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "visible";
        
    })

    document.getElementById("next").addEventListener("click",function(){
        let turnCount = Number(document.getElementById("TurnCount").innerText);
        let playerScore = Number(document.getElementById("PlayerScore").innerText);
        let computerScore = Number(document.getElementById("ComputerScore").innerText);
        let playerCard = document.getElementById("PlayerCard");
        let computerCard = document.getElementById("ComputerCard");

        playerCard.innerText = rankGen(playerArray[turnCount].rank) +
            " " + suitGen(playerArray[turnCount].suit);

        if (playerArray[turnCount].suit === 1 || playerArray[turnCount].suit === 2) {
            playerCard.className = "blackCard";
        }else{
            playerCard.className = "redCard";
        }
        if(computerArray[turnCount].suit === 1|| computerArray[turnCount].suit === 2){
            computerArray.className = "blackCard";
        }else{
            computerArray.className = "redCard";
        }

        computerCard.innerText = rankGen(computerCard[turnCount].rank) +
            " " + suitGen(computerCard[turnCount].suit);
        
    //Deciding the round winner
        if (playerCard[turnCount].rank > computerCard[turnCount].rank) {
            playerScore++;
            document.getElementById("message").innerText = "You won this hand!"  
        }
        if (playerCard[turnCount].rank < computerCard[turnCount].rank) {
            computerScore++;
            document.getElementById("message").innerText = "You lost this hand."      
        }
        if (playerCard[turnCount].rank === computerCard[turnCount].rank) {
            if (playerCard[turnCount].suit < computerCard[turnCount].suit) {
                playerScore++;
                document.getElementById("message").innerText = "You won this hand!"
            }else{
                computerScore++;
                document.getElementById("message").innerText = "You lost this hand."                                            
            }
        }

        document.getElementById("PlayerScore").innerText = playerScore;
        document.getElementById("ComputerScore").innerText = computerScore;

        if (turnCount === 26) {
            if (playerScore > computerScore){
                document.getElementById("message").innerText = "Game over. YOU WON!"
            }
            if (playerScore < computerScore) {
                document.getElementById("message").innerText = "Game over. YOU LOST!"
            }
            if (playerScore === computerScore){
                document.getElementById("message").innerText = "Game over. IT'S A TIE!"
            }
        }
        document.getElementById("next").style.visibility = "hidden";

    })
})
    