let userScore=0;
let comScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#com-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComChoice=()=>{
    let options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
console.log("game was draw.");
msg.innerText="game was draw! please play again";
msg.style.backgroundColor="#081b31";
}
const showWineer=(userWin,clicked,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your ${clicked} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        compScorePara.innerText=comScore;
        console.log("you loss");
        msg.innerText=`you lost! ${comChoice} beats your ${clicked}`;
    msg.style.backgroundColor="red";
    }
    }


const playGame=(clicked)=>{
console.log("user choice=",clicked);
 const comChoice = genComChoice();
console.log("computer choice=",comChoice);
if(clicked===comChoice){
    drawGame();
}
else{
    let userWin=true;
    if(clicked==="rock"){
    userWin=clicked==="paper"?false:true;
    }
    else if(clicked==="Scissors"){
        userWin=comChoice==="paper"?false:true;
    }
    else{
      userWin=comChoice==="rock"?false:true;
    }
    showWineer(userWin,clicked,comChoice);
}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const clicked=choice.getAttribute("id");
        
    playGame(clicked);
    });
});

