
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
