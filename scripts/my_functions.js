

// boolean flags
let   gameOver = false;
let startPlaying = false;

//changeable variables 
let yourScore = document.getElementById("your-score");
let computerScore = document.getElementById("computer-score");
let yourTotalScore = document.getElementById("your-total-score");
let computerTotalScore = document.getElementById("computer-total-score") ;

//set the initial value
let round = 0;
let totalScore = 0;
let totalScoreComputer = 0;


//pop-up script, ensure delay need to be updated 
//change pop up style and function details

// buttons
const rollDiceBtn = document.getElementById('btn-roll-dice');
const newGameBtn = document.getElementById('btn-new-game');




// set pop-ups 
popup.style.opacity = "0";

const popup = document.getElementById('pop-up');
const closePopup = document.getElementById('btn-close');
const winner = document.getElementById('result');

const delay = 1000;


 

// dice images 


//This function will generate 4 random numbers and each number will be assigned to the image of each sides of dice.
//Every round 'user' and 'computer' get the score and it will be calculated based on the following rules. 
//

function rollTheDice(){
    
    // set round
        if(startPlaying){
            // generate random numbers when rolling a dice
            let randomNumber1 = Math.floor(Math.random()*6)+1;
            let randomNumber2 = Math.floor(Math.random()*6)+1;
            let randomNumber3 = Math.floor(Math.random()*6)+1;
            let randomNumber4 = Math.floor(Math.random()*6)+1;
            
            // set the final round as 3
            if(round <=2){
                loading();   
                setTimeout(function(){
                    document.querySelector(".dice1").setAttribute("src","images/dice"+randomNumber1+".png");
                    document.querySelector(".dice2").setAttribute("src","images/dice"+randomNumber2+".png");
                    document.querySelector(".dice3").setAttribute("src","images/dice"+randomNumber3+".png");
                    document.querySelector(".dice4").setAttribute("src","images/dice"+randomNumber4+".png");
                    
                    // invoke get the current score function
                    getScore("you");
                    getScore("computer");
                    },2700);
                    

                function getScore(player){
                    let currentScore = 0;
                    
                    // pass the params to 
                    if(player === "you"){
                        if(randomNumber1 && randomNumber2 >1){
                            currentScore = randomNumber1 + randomNumber2;
                            if(randomNumber1 === randomNumber2){
                                currentScore = (randomNumber1+randomNumber2)*2;
                            }
                            if(randomNumber1=== 1){
                                currentScore =0;
                            }
                            if(randomNumber2 ===1){
                                currentScore = 0;
                            }
                         }
                        // how to have the total score using function? 
                            
                        totalScore = totalScore + currentScore;
                        yourTotalScore.innerHTML = `${totalScore}`;
                        yourScore.innerHTML = `<span>${currentScore}</span>`;
                        console.log(`Round ${round}, you get ${currentScore}.`);
                        console.log(`Your total score is ${totalScore}`);
                        
                
                    }if(player === "computer"){
                        if(randomNumber3 && randomNumber4 >1){
                            currentScore = randomNumber3 + randomNumber4;
                            if(randomNumber3 === randomNumber4){
                                currentScore = (randomNumber3+randomNumber4)*2;
                            }
                            if(randomNumber3=== 1){
                                currentScore =0;
                            }
                            if(randomNumber4 ===1){
                                currentScore = 0;
                            }
                        }
                        
                        totalScoreComputer = totalScoreComputer +currentScore;
                        computerTotalScore.innerHTML =`${totalScoreComputer}`;
                        computerScore.innerHTML = `<span>${currentScore}</span>`;
                        console.log(`Round ${round}, coumputer gets ${currentScore}.`);
                        console.log(`Computer's total score: ${totalScoreComputer}`);
                        console.log("----------------------------------------");
                        
                
                }   
            }
            
           
                
            }
            }
                /*
                startPlaying = false;
                gameOver = true;
                setTimeout( function(){
                    popupMessage(totalScore, totalScoreComputer);
                    if(gameOver === false){
                        popup.style.display = "none";
                    }else{
                        fadeIn(popup);
                        function fadeIn(element){
                            let op = 0;
                            element.style.opacity = op;
                            timer = setInterval(function(){
                                if(op>= 1.0){
                                    clearInterval(timer);
                                }
                                element.style.opacity = op;
                                op += 0.1;
                            }, 80);
                            
                
                        }
                
                    }
                },3000); */
           
        
           
         round = round+1;
       
       
}
   

const popup2 = document.getElementById('pop-up2');
popup2.style.display = "none";


 //loading page will be displayed each time the user clicks 'roll dice' button. 
function loading( ){
    if(startPlaying === true){
        popup2.style.display = "block";
        }
    setTimeout(function(){
         popup2.style.display = "none";
        startPlaying = false;
       }
   
    ,2500)
     
}
 //popup will show up with a message including a winner after 3 round.
   
function popupMessage(score1, score2){
    if(score1 > score2){
        winner.innerHTML = `<p>Congratulation! You won!</p>
                            <p>To paly again, click 'New Game'</p>`;

    }else if(score1 === score2){
        winner.innerHTML = `<p>Tie! To paly again, click 'New Game' </p>`;  
    }else{
        winner.innerHTML = `<p>Tough luck! You lost..</p>
        <p>To paly again, click 'New Game'</p>`;
    
    }

}

//popup will close when clicking 'ok' button
closePopup.addEventListener('click', function(){
    popup.style.opacity = "0";
    });


//A button that will roll the dice
rollDiceBtn.addEventListener("click", function(){
    startPlaying = true; 
    rollTheDice();
   });

//A button that will reset the score and start a new game
newGameBtn.addEventListener("click", function(){
    gameOver = false;
    yourTotalScore = 0;
    computerTotalScore = 0;
    round = 0;
    popup.style.opacity = "0";
    console.log("Reset all rounds")
});

 

//tabs - instruction, rules
const $tab01 =$('.tab01');
const $tab02 = $('.tab02');
const $content = $('.content');
let $sticky = $("content-header");
 
$tab01.click(function(){
    $(".content-01").slideToggle(40);
});
$tab02.click(function(){
    $(".content-02").slideToggle(40);
});

 
