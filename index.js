for (let age = 30; age < 40; age ++) {
  console.log (`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ['teddy bear', 'drone', 'doll'];
function wrapGifts (gifts) {
  for (let i=0; i<gifts.length; i++) {
  console.log (`Wrapped ${gifts [i]} and added a bow!`);
  }
  return gifts;
}

const names = ['Joe', 'Gabe'];
function printBadges (names) {
  for (let i=0; i < names.length; i++) {
    console.log (`Welcome ${names [i]}! You are employee #${[i+1]}.`);
  }
  return names;
}

function tailsNeverFails() {
  let i = 0;
  while (Math.random() >= 0.5){
    i++;
  }
  return `You got ${i} tails in a row!`;
}

function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 1){
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
