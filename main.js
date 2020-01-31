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

        

    })
})
    function suitGen(aSuit) {
        
    }