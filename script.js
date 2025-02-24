
let humanScore = 0;
let computerScore = 0 ;

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

function getHumanChoice(){
    const Human_Choice=window.prompt("what is your choise ? (pick one number) \n 1- Rock \n 2- Paper \n 3- Scissors");
    if (Human_Choice==1){
        return "Rock";
    }

    else if  (Human_Choice==2){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}

function playRound(Human_Choice, Computer_Choice){

    if (Human_Choice == "Scissors" && Computer_Choice == "Paper"){
        humanScore++
        return `You Won ! ${Human_Choice} beats ${Computer_Choice}`;
    }

    else if  (Human_Choice == "Scissors" && Computer_Choice == "Rock"){
        computerScore++
        return `You lost ! ${Computer_Choice} beats ${Human_Choice}`;
    }

    else if  (Human_Choice == "Paper" && Computer_Choice == "Rock"){
        humanScore++
        return `You Won ! ${Human_Choice} beats ${Computer_Choice}`;
    }

    else if  (Human_Choice == "Paper" && Computer_Choice == "Scissors"){
        computerScore++
        return `You lost ! ${Computer_Choice} beats ${Human_Choice}`;
    }

    else if  (Human_Choice == "Rock" && Computer_Choice == "Scissors"){
        humanScore++
        return `You Won ! ${Human_Choice} beats ${Computer_Choice}`;
    }

    else if  (Human_Choice == "Rock" && Computer_Choice == "Paper"){
        computerScore++
        return `You lost ! ${Computer_Choice} beats ${Human_Choice}`;
    }

    else {
        return `Damn it  is a tight i will get you next round `;
    }

}
