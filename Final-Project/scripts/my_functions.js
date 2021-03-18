

//pop-up script, ensure delay need to be updated 
//change pop up style and function details
const rollDiceBtn = document.getElementById('btn-roll-dice');
const newGameBtn = document.getElementById('btn-new-game');


const popup = document.getElementById('pop-up');
const closePopup = document.getElementById('btn-close');
const winner = document.getElementById('result');

let   gameOver = false;
const delay = 1000;
popup.style.opacity = "0";



closePopup.addEventListener('click', function(){
    popup.style.opacity = "0";
    });


// dice images 

// setinterval!

let startPlaying = true;
let yourScore =document.getElementById("your-score");
let computerScore =document.getElementById("computer-score");
let yourTotalScore = document.getElementById("your-total-score");
let computerTotalScore = document.getElementById("computer-total-score") ;
let round = 0;


function rollTheDice(){
    // set round
    if(startPlaying){
        round = round+1;
        // generate random numbers when rolling a dice
        let randomNumber1 = Math.floor(Math.random()*6)+1;
        let randomNumber2 = Math.floor(Math.random()*6)+1;
        let randomNumber3 = Math.floor(Math.random()*6)+1;
        let randomNumber4 = Math.floor(Math.random()*6)+1;

        // set the final round as 3
        if(round <4){
            document.querySelector(".dice1").setAttribute("src","images/dice"+randomNumber1+".png");
            document.querySelector(".dice2").setAttribute("src","images/dice"+randomNumber2+".png");
            document.querySelector(".dice3").setAttribute("src","images/dice"+randomNumber3+".png");
            document.querySelector(".dice4").setAttribute("src","images/dice"+randomNumber4+".png");
            
            // invoke get the current score function
            getScore("you");
            getScore("computer");
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
                         
                            
                    yourScore.innerHTML = `<span>${currentScore}</span>`;
                    
                    console.log(`Round ${round}, you get ${currentScore}.`)
                     
            
                }
                if(player === "computer"){
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
                    

                    computerScore.innerHTML = `<span>${currentScore}</span>`;
                    console.log(`Round ${round}, coumputer gets ${currentScore}.`)
                    console.log("----------------------------------------");
                    
            
            }   

           //pop-up doesn/t appear  
        }if(round ===3){
            gameOver = true;
            setTimeout( function(){
                popupMessage(yourScore, computerTotalScore);
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
                        }, 100);
                        
            
                    }
            
                }
            },delay)
         }
        } 
    }
}
    
    
function popupMessage(score1, score2){
    if(score1 > score2){
        winner.innerHTML = `<p>Congratulation! You won!</p>`;

    }else if(score1 = score2){
        winner.innerHTML = `<p>Tie! </p>`;  
    }
    
    else{
        winner.innerHTML = `<p>Tough luck! You lost..</p>`;
    }

}



rollDiceBtn.addEventListener("click", function(){
    rollTheDice();
    startPlaying = true;
 });

// 

newGameBtn.addEventListener("click", function(){
    gameOver = false;
    yourTotalScore = 0;
    computerTotalScore = 0;
    round = 0;
    popup.style.opacity = "0";
    console.log("Reset all rounds")
});


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

 
