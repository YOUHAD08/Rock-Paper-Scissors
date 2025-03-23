
let humanScore ;
let computerScore ;

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

    if (Human_Choice == "Scissors" && Computer_Choice == "Paper"){
        humanScore++
        return `You Won ! ${Human_Choice} beats ${Computer_Choice}`;
    }

    else if 
     (Human_Choice == "Scissors" && Computer_Choice == "Rock"){
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
