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

function tailsNeverFails () {
  return Math.random () >= 0.5;
}
// while (tailsNeverFails ()) {
//   console.log (`You got ${[i]} tails in a row!`)
// }
// while (maybeTrue ()) {
//   console.log ('And I ran... I ran so far away!');
// }

let tails = [0.7, 0.5];
function tailsNeverFails () {
  return Math.random () <=1;
}
tails.push (tailsNeverFails)
while (tailsNeverFails ()) {
  console.log (`You got ${tails} tails in a row!`)
}
