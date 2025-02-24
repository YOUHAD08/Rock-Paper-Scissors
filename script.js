
function getComputerChoice(){
    const Computer_Choice = Math.floor(Math.random() * 3);
    if (Computer_Choice===0){
        return "Rock";
    }

    else if  (Computer_Choice==1){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}
