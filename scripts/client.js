console.log('Hello Castor');

// {} - object literal
const hairColorOpt1 = 'black';
const hairColorOpt2 = function() { console.log('BLUE HAIR!!!!') };
const hairColorOpt3 = true;
const hairColorOpt4 = ['orange'];

hairColorOpt2();

const person = {
  name: 3,
  hairColor: hairColorOpt2,
};
console.log(person);

// add info to Object
person.age = 37;
const ageKey = 'age';
console.log(person[ageKey]);
const myName = 'name';

console.log(person['hairColor']);
console.log(person.name);

const pam = { name: 'Pam' };
const collection = [
  {
    name: 'Tim',
  },
  pam,
]

const itemIndex = collection.indexOf(pam);
console.log(itemIndex);


// Object
const differentPerson = new Object();
new Array();

function myPerson() {
  return {
    name: 'Myron',
    hairColor: hairColorOpt2,
  }
}

const fruitBasket = [];
function fruitForBasket(name, quantity, price) {
  const newFruit = {
    // property - key: value
    name,
    quantity,
    price,
  };
  console.log(newFruit);
  fruitBasket.push(newFruit);
}

console.log(fruitForBasket('orange', 2, 6));


// function supaDupa(searchObj) {
//   // loop
//   // { title, artist, year }
//   if (
//     ()
//     || ()
//     || ()
//   )
//   // title no artist
//   // artist no title
//   // artist and title
// }

// supaDupa({ artist: 'Myron' });
// supaDupa({ title: 'Wonder Wall' });
// supaDupa({ title: 'Wonder Wall', artist });
