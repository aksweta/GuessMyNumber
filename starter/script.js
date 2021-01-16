'use strict';


/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'change number!';
console.log(document.querySelector('.message').textContent = 'change number!');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/


const secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;





document.querySelector('.check').addEventListener
('click',function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(typeof guess);


    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';  
    }else if(guess === secretNumber ){
        document.querySelector('.message').textContent = 'correct number';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber ;

    }else if (guess < secretNumber){
        if( score > 1){
        document.querySelector('.message').textContent = 'Too Low ';
        score = score -1;
        document.querySelector('.score').textContent = score ; 
        }else {
            document.querySelector('.message').textContent = 'You lost the game ';
        score = score -1;
        document.querySelector('.score').textContent = score ;
        }

    }else if (guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'High Score';
        score = score -1;
        document.querySelector('.score').textContent = score ;
        }else{
            document.querySelector('.message').textContent = 'You lost the game ';
            score = score - 1;
            document.querySelector('.score').textContent = score ;
            
        } 
    }
    
});



