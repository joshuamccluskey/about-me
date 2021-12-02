"use strict";

let counter = 0;

//Prompt to greet user and collect their name 
let usersName = prompt ('Hi there! What\'s your name?');

  // console.log('Welcome ' + usersName + '!'); 
  let greeting = alert ('Welcome ' + usersName + '!'); 

// // //Question 1 
let responseOne = prompt ('Am I Badger from Wisconsin?').toLowerCase();

  if(responseOne === 'yes' || responseOne === 'y'){
    // console.log(responseOne + '! Correct! I\'m from Wisconsin'); 
    alert ('Correct! I\'m from Wisconsin! My family has an organic dairy farm over there, and they make cheese like true Wisconsinites!');
    counter++;
  } else {
    alert ('Not Correct! I\'m actually from Wisconsin! My family has an organic dairy farm over there, and they make cheese like true Wisconsinites!');
  }

//Question 2
let responseTwo = prompt ('Was I born in Wisconsin?').toLowerCase();

  if(responseTwo === 'no' || responseTwo === 'n'){
    // console.log(responseTwo + '! Correct! I was actually born near Pheonix in Mesa, AZ.'); 
    alert ('Correct! I was actually born near Pheonix in Mesa, AZ.');
    counter++;
  } else {
    alert ('Not Correct! I was actually born near Pheonix in Mesa, AZ.');
  }  

//Question 3
let responseThree = prompt ('Do I like to learn languages?').toLowerCase();

  if(responseThree === 'yes' || responseThree === 'y'){
    // console.log(responseThree + '! Correct! I learned languages back in college, and did it for a living for a bit.'); 
    alert ('Correct! I learned languages back in school, and did it for a living for a bit.');
    counter++;
  } else {
    alert ('Not Correct! I learned languages back in school, and did it for a living for a bit.');
  }

//Questions 4

let responseFour = prompt ('Do I like dogs?').toLowerCase();

  if(responseFour === 'yes' || responseFour === 'y'){
    // console.log(responseFour + '! Correct! I have two dogs: Remy is a Corgi Shiba mix, and Tilly is "Super Mutt" according to Cornnell University.'); 
    alert ('Correct! I have two dogs: Remy\'s a Corgi Shiba mix and Tilly\'s "Super Mutt" according to Cornnell University.');
    counter++;
  } else {
    alert ('Not Correct! I actually have two dogs: Remy is a Corgi Shiba mix, and Tilly is "Super Mutt" according to Cornnell University.');
  }

//Question 5

let responseFive = prompt ('Is cheese my favorite food?').toLowerCase();

  if(responseFive === 'yes' || responseFive === 'y'){
     // console.log(responseFive + '! Correct! This isn't even a question if you responded to the first questions correctly.'); 
     alert ('Correct! The first question was a pretty good hint.');
     counter++;
  } else {
    alert ('Not Correct! Come on...my family makes cheese in Wisconsin.');
  }

//Question 6

let userNumber = prompt('Guess my favorite number 1-10');
let correctAnswer = 8;

for(let i = 3; i > 0; i--){
    while(userNumber < 1 || userNumber > 10){
      userNumber = prompt (`Pick a number between 1-10`)
    } if (+userNumber === correctAnswer){
      alert (`Correct! Its 8`);
      counter++;
      break;
    } else if (userNumber > correctAnswer){
    userNumber = prompt(`Too High!`);
    } else if (userNumber < correctAnswer){
    userNumber = prompt(`Too Low!`);
    }
  if (i === 1){
  alert (`Darn...my favorite number is 8!`);
  }
}

//Question 7

let userLang = prompt('What languages do I speak?').toUpperCase();
let correctAnswerLang = ['FARSI' , 'DARI' , 'ENGLISH' , 'TAGALOG'];

for(let i = 6; i > 0; i--){
     if (i == 1){
      alert (`I speak Tagalog, Dari, Farsi, and English.`);
    } else if (userLang === correctAnswerLang[0]){
      alert (`Correct! I also speak Dari, Tagalog, and English.`);
      counter++;
      break;
    } else if (userLang === correctAnswerLang[1]){
      alert (`Correct! I also speak Farsi, Tagalog, and English.`);
      counter++;
      break;
    } else if (userLang === correctAnswerLang[2]){
      alert (`Correct! I also speak Dari, Tagalog, and Farsi.`);
      counter++;
      break;
    } else if (userLang === correctAnswerLang[3]){
      alert (`Correct! I also speak Dari, Farsi, and English.`);
      counter++;
      break;
    } else if (userLang !== correctAnswerLang[0,1,2,3]){
      userLang = prompt('What languages do I speak?').toUpperCase();
    }
}

let outro = alert (`Nice ${usersName}! Thanks for taking the time to learn a few things about me! You can read more on my About Me page. You got ${counter} / 7!`);
