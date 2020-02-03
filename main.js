document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("next").style.visibility = "hidden";

    let playerArray = [];
    let computerArray = [];

    document.getElementById("deal").addEventListener("click", function () {
        deck.load();

        for (let i = 0; i < 26; i++) {
            random = Math.floor(Math.random() * 52)
            while (deck.cardArray[random].inuse === true) {
                random = Math.floor(Math.random() * 52)
            }
            playerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;

            random = Math.floor(Math.random() * 52)
            while (deck.cardArray[random].inuse === true) {
                random = Math.floor(Math.random() * 52)
            }
            computerArray[i] = deck.cardArray[random];
            deck.cardArray[random].inuse = true;
        }

        document.getElementById("deal").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "visible";

    })

    document.getElementById("next").addEventListener("click", function () {
        let turnCount = Number(document.getElementById("turnCount").innerText);
        let playerScore = Number(document.getElementById("PlayerScore").innerText);
        let computerScore = Number(document.getElementById("ComputerScore").innerText);
        let playerCard = document.getElementById("PlayerCard");
        let computerCard = document.getElementById("ComputerCard");

        playerCard.innerText = rankGen(playerArray[turnCount].rank) +
            " " + "of " + suitGen(playerArray[turnCount].suit);


        computerCard.innerText = rankGen(computerArray[turnCount].rank) +
            " " + "of " + suitGen(computerArray[turnCount].suit);

        if (playerArray[turnCount].suit === 1 || playerArray[turnCount].suit === 2) {
            playerCard.className = "blackCard";
        } else {
            playerCard.className = "redCard";
        }
        if (computerArray[turnCount].suit === 1 || computerArray[turnCount].suit === 2) {
            computerCard.className = "blackCard";
        } else {
            computerCard.className = "redCard";
        }
        //Deciding the round winner
        if (playerArray[turnCount].rank > computerArray[turnCount].rank) {
            playerScore++;
            document.getElementById("message").innerText = "You won this hand!"
        }
        if (playerArray[turnCount].rank < computerArray[turnCount].rank) {
            computerScore++;
            document.getElementById("message").innerText = "You lost this hand."
        }
        if (playerArray[turnCount].rank === computerArray[turnCount].rank) {
            if (playerArray[turnCount].suit < computerArray[turnCount].suit) {
                playerScore++;
                document.getElementById("message").innerText = "You won this hand!"
            } else {
                computerScore++;
                document.getElementById("message").innerText = "You lost this hand."
            }
        }

        document.getElementById("PlayerScore").innerText = playerScore;
        document.getElementById("ComputerScore").innerText = computerScore;

        if (++turnCount === 26) {
            if (playerScore > computerScore) {
                document.getElementById("message").innerText = "Game over. YOU WON!"
            }
            if (playerScore < computerScore) {
                document.getElementById("message").innerText = "Game over. YOU LOST!"
            }
            if (playerScore === computerScore) {
                document.getElementById("message").innerText = "Game over. IT'S A TIE!"
            }
            document.getElementById("next").style.visibility = "hidden";
        }
        document.getElementById("turnCount").innerText = turnCount;
    })
})

function suitGen(aSuit) {
    switch (aSuit) {
        case 1:
            return "Spades";
            break;

        case 2:
            return "Clubs";
            break;

        case 3:
            return "Diamonds";
            break;

        case 4:
            return "Hearts";
            break;
        default:
            break;
    }
}

function rankGen(aRank) {
    switch (aRank) {
        case 1:
            return "1";
            break;

        case 2:
            return "2";
            break;

        case 3:
            return "3";
            break;

        case 4:
            return "4";
            break;
        case 5:
            return "5";
            break;

        case 6:
            return "6";
            break;

        case 7:
            return "7";
            break;

        case 8:
            return "8";
            break;
        case 9:
            return "9";
            break;

        case 10:
            return "10";
            break;

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
