"use strict";

//Prompt to greet user and collect their name 
let usersName = prompt ('Hi there! What\'s your name?');

  // console.log('Welcome ' + usersName + '!'); 
  let greeting = alert ('Welcome ' + usersName + '!'); 

//Question 1 
let responseOne = prompt ('Am I Badger from Wisconsin?').toLowerCase();

  if(responseOne === 'yes' || responseOne === 'y'){
    // console.log(responseOne + '! Correct! I\'m from Wisconsin'); 
    alert ('Correct! I\'m from Wisconsin! My family has an organic dairy farm over there, and they make cheese like true Wisconsinites!');
  } else {
    alert ('Not Correct! I\'m actually from Wisconsin! My family has an organic dairy farm over there, and they make cheese like true Wisconsinites!');
  }

//Question 2
let responseTwo = prompt ('Was I born in Wisconsin?').toLowerCase();

  if(responseTwo === 'no' || responseTwo === 'n'){
    // console.log(responseTwo + '! Correct! I was actually born near Pheonix in Mesa, AZ.'); 
    alert ('Correct! I was actually born near Pheonix in Mesa, AZ.');
  } else {
    alert ('Not Correct! I was actually born near Pheonix in Mesa, AZ.');
  }  

//Question 3
let responseThree = prompt ('Do I like to learn languages?').toLowerCase();

  if(responseThree === 'yes' || responseThree === 'y'){
    // console.log(responseThree + '! Correct! I learned languages back in college, and did it for a living for a bit.'); 
    alert ('Correct! I learned languages back in school, and did it for a living for a bit.');
  } else {
    alert ('Not Correct! I learned languages back in school, and did it for a living for a bit.');
  }

//Questions 4

let responseFour = prompt ('Do I like dogs?').toLowerCase();

  if(responseFour === 'yes' || responseFour === 'y'){
    // console.log(responseFour + '! Correct! I have two dogs: Remy is a Corgi Shiba mix, and Tilly is "Super Mutt" according to Cornnell University.'); 
    alert ('Correct! I have two dogs: Remy\'s a Corgi Shiba mix and Tilly\'s "Super Mutt" according to Cornnell University.');
  } else {
    alert ('Not Correct! I actually have two dogs: Remy is a Corgi Shiba mix, and Tilly is "Super Mutt" according to Cornnell University.');
  }


//Question 5

let responseFive = prompt ('Is cheese my favorite food?').toLowerCase();

  if(responseFive === 'yes' || responseFive === 'y'){
     // console.log(responseFive + '! Correct! This isn't even a question if you responded to the first questions correctly.'); 
     alert ('Correct! The first question was a pretty good hint.');
  } else {
    alert ('Not Correct! Come on...my family makes cheese in Wisconsin.');
  }

// Outro statement adressing the user

let outro = alert ('Nice ' + usersName + '! Thanks for taking the time to learn a few things about me! You can read more on my About Me page.' );

