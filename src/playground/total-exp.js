const expenses = [{
    id:'1',
    description:'Gum',
    note: '',
    amount:195,
},{
    id:'2',
    description:'Rent',
    note: '',
    amount:109500,
},{
    id:'3',
    description:'Credit Card',
    note: '',
    amount:4500,
}];

const emptyArray = [];
const oneElementArray = [expenses[1]];

const array = [1,2,3,4];
const array3 = [1];
const array4 = array3.map(el => el);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const array2 = expenses.map(el => el.amount);
const total = expenses.map(el => el.amount).reduce(reducer);
const totalEmpty = emptyArray.map(el => el.amount).reduce(reducer,0);
const totalOne = oneElementArray.map(el => el.amount).reduce(reducer);

console.log('Reducer total1:',array.reduce(reducer));
console.log('Reducer total2:',array.reduce(reducer,5));
console.log('Array2 map:', array2);
console.log('Total of Array2 :', total);
console.log('Total of totalEmpty :', totalEmpty);
console.log('Map and Reducer for array3:',array3.map(el => el).reduce(reducer));
console.log('One expense:', oneElementArray);
// console.log('One array element array3:', array3);

console.log('Total One expense:',totalOne);