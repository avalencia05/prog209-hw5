let deck = {
    const: ranks[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    const: suits[1,2,3,4],
    cardArray:[], 
    Load: function(){
        for(let rank in ranks){
            for(let suit in suits){
                this.cardArray.push(new Card(suits[suit], ranks[rank]))
            }
        }   
    }
}