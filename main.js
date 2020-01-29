document.addEventListener("DOMContentLoaded", function(event){
    playerArray=[];
    computerArray=[];

    document.getElementById("deal").addEventListener("click",function(){
        deck.Load();
        random = Math.floor(Math.random()*52)
    })

    document.getElementById("next").addEventListener("click",function(){
        
    })
})