'use strict';


/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'change number!';
console.log(document.querySelector('.message').textContent = 'change number!');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener
('click',function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(typeof guess);


    if(!guess){
     
       displaymessage('No Number!');  
    }else if(guess === secretNumber ){
        displaymessage('correct number');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber ;

        if(score > highscore)
        {
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
        }
    }else if (guess !== secretNumber){
        if( score > 1){
            displaymessage(guess > secretNumber ? 'too high': 'too low');
            score = score -1;
            document.querySelector('.score').textContent = score ; 
            }else {
                displaymessage('You lost the game ');
            score = score -1;
            document.querySelector('.score').textContent = score ;
            }

          }
    });




    document.querySelector('.again').addEventListener
   ('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1 ;
    document.querySelector('.score').textContent = '20';
    displaymessage ('Start guessing...'); 
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.number').style.width = '15rem';
    });


