
let humanScore =0;
let computerScore=0 ;
let round =1;
const table = document.querySelector("table");
const tbody = table.querySelector("tbody");
const scoreboard = document.querySelector(".scoreboard");
const announcement = document.querySelector(".announcement");
const robotChoice = document.querySelector("#robotChoice");
const humainChoice = document.querySelector("#humainChoice");
const Player_Name = document.getElementById("Player_Name");

let playerName  ;
let gameStarted = false; 

const choise = {
    "r" : "Rock",
    "p" : "Paper",
    "s" : "Scissors",
}

const lucky_hand= {
    "Scissors" : "Paper",
    "Paper" : "Rock",
    "Rock" : "Scissors",
}

const backgroundcolor = {
    "Scissors" : "aqua",
    "Paper" : "yellow",
    "Rock" : "pink",
}
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal and elements
    const welcomeModal = document.getElementById('welcomeModal');
    const startGameBtn = document.getElementById('startGameBtn');
    const playerNameInput = document.getElementById('playerName');
    
    // Show the modal when the page is fully loaded
    welcomeModal.style.display = 'flex';

    // Event listener for the "Start Game" button
    startGameBtn.addEventListener('click', () => {
        playerName = playerNameInput.value.trim();

        // If a name is entered, start the game
        if (playerName) {
            alert(`Welcome, ${playerName}!`);
            
            Player_Name.textContent = playerName ;
            // Hide the modal
            welcomeModal.style.display = 'none';
            gameStarted = true;
        } else {
            alert('Please enter a valid name.');
        }
    });
});


document.addEventListener("keydown", (event) => {

    if (!gameStarted) {
        return;  // Don't do anything if the game has not started
    }
    if (!['r', 's', 'p'].includes(event.key)) {
        return;
    }
    let Robot_Choice=getComputerChoice();
    let Human_Choice=choise[event.key]
    
    robotChoice.src = `images/${Robot_Choice}.png`;
    robotChoice.alt = Robot_Choice;
    robotChoice.style.backgroundColor = backgroundcolor[Robot_Choice];
    robotChoice.style.borderRadius = "50%";

    humainChoice.src = `images/${Human_Choice}.png`;
    humainChoice.alt = Human_Choice;
    humainChoice.style.backgroundColor = backgroundcolor[Human_Choice];
    humainChoice.style.borderRadius = "50%";

    let winner = playRound(Human_Choice, Robot_Choice);

    if (winner==null) announcement.textContent='its a tight, play again';
    else {
        if (winner == "Humain") winner = playerName;
        announcement.textContent=`Winner is : ${winner}`;
        scoreboard.textContent=`0${computerScore} : 0${humanScore}`;
        if (computerScore==5 || humanScore==5  ) {
            
            roundWinner = getRoundWinner(computerScore,humanScore);
            if (roundWinner == "Humain") winner = playerName;
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.textContent=round;
            td2.textContent=roundWinner;
            tr.append(td1,td2);
            tbody.prepend(tr);
            computerScore=0;
            humanScore=0;
            scoreboard.textContent ="00:00";
            announcement.textContent="Winner is : ";
            round++;

            robotChoice.src = "images/questionMarkRobot.png";
            robotChoice.removeAttribute("alt");
            robotChoice.removeAttribute("style"); 

            humainChoice.src = "images/questionMarkHuman.png"
            humainChoice.removeAttribute("alt");
            humainChoice.removeAttribute("style"); 

            ;

        }
    }
})

function getRoundWinner(computerScore,humanScore){
    if (computerScore>humanScore) return "Robot";
    else return "Humain";
}

function getComputerChoice(){
    const Computer_Choice = Math.floor(Math.random() * 3);
    if (Computer_Choice===0){
        return "Rock";
    }

    else if  (Computer_Choice===1){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}



function playRound(Human_Choice, Computer_Choice){
    if (Human_Choice == Computer_Choice) {
        return null;
    }
    else if (lucky_hand[Human_Choice]==Computer_Choice) {
        humanScore++;
        return "Humain";
    } 
    else {
        computerScore++;
        return "Robot";
    }
    
}
