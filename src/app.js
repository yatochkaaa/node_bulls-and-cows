'use strict';

import readline from 'readline';

const numberLength = 4;

function shuffle(o){
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

  return o;
}

const fourRandomDigits = () => {
  return shuffle( '0123456789'.split('') ).join('').substring(0, numberLength);
}

const randomNumber = fourRandomDigits();
console.log('random number:', randomNumber);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkResult = (userInput) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < numberLength; i++) {
    if (randomNumber[i] === userInput[i]) {
      bulls++;
    } else if (randomNumber.includes(userInput[i])) {
      cows++;
    }
  }

  console.log(`bulls: ${bulls}, cows: ${cows}`);

  if (bulls === numberLength) {
    rl.close();
  } else {
    rl.question(`enters a number of ${numberLength} different digits: `, checkResult);
  }
}

rl.question(`enters a number of ${numberLength} different digits: `, checkResult);
