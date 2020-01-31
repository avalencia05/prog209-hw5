document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById("next").style.visibility = "hidden";
    let playerArray=[];
    let computerArray=[];

    document.getElementById("deal").addEventListener("click",function(){
        deck.Load();
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
        let comuterScore = Number(document.getElementById("ComputerScore").innerText);
        let playerCard = document.getElementById("PlayerCard");
        let computerCard = document.getElementById("ComputerCard");

        playerCard.innerText = rankGen(playerArray[turnCount].rank) +
            " " + suitGen(playerArray[turnCount].suit);
        if (playerArray[turnCount].suit === 1 || playerArray[turnCount].suit === 2) {
            
        }
    })
})
    function suitGen(aSuit) {
        switch(aSuit){
            case 1: 
                return "Spade";

                break;
            case 2: 
                return "Club";

                break;
            case 3: 
                return "Diamond";

                break;
            case 4: 
                return "Heart";
            default:
                break;
        }
        
    }

    function rankGen(aRank) {
        if (aRank > 10) {
            switch (aRank) {
                case 11: 
                    return "Jack";
                    
                    break;
                case 12: 
                    return "Queen";
                    
                    break;
                case 13: 
                    return "King";
                    
                    break;    
                case 14: 
                    return "Ace";
                    
                    break;
                default:
                    break;
            }
        }  
    }