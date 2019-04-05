// console.log('Destructuring!!');
// const person = {
//     name: 'Florence',
//     age: '51',
//     location: {
//         city: 'Montreal',
//         temp: '-15'
//     }
// }

// const {name: firstName ='Anonymous', age} = person;  //This is called es6 destructuring statement. const {var1, var2, ..., varn} = object
// //var = value, the '=' operator is default value. ':' operator is rename variable
// //above statement is equivalent too:
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age} years old!`);
// const {city, temp: temperature} = person.location; //':' operator is rename variable
// if (city&&temperature) {
//     console.log(`It's a ${temperature} in the ${city}`);
    
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher
console.log(publisherName);

const address = ['8508 rue Waverly','Montreal','Quebec','H2P1Y6']
const [street, city, state, zip] = address;

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
