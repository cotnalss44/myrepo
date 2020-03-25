//console.function
//https://developer.mozilla.org/en-US/docs/Web/API/console
// console.log('hello world');
// console.error('This is an error');
// console.warn('This is a warning');


//var (globally scoped), let, const
// let = re-assign values, use when the value changes
// let age = 30
// age = 40
// console.log(age);

// const age = 30
// age = 40
// console.log(age);


//data type, Stirng, Number, Boolean, null, undefined, Symbol
// const name = 'John'; //can use ""
// const age = 40 // Number
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // this is also undefined

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

//contactenation
// console.log('My name is name and my age is age.');
// console.log('My name is ' + name + ' and my age is '+age+'.');
// //Template String
// console.log(`My name is ${name} and my age is ${age}.`);
// const hello = `My name is ${name} and my age is ${age}.`;
// console.log(hello);

// const s = 'Hello World!';
// const y = "technology, computers, it, code";
// console.log(s);
// console.log(typeof(s));
// console.log(s.length);

// // console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 7));
// console.log(s.substring(3, 5).toUpperCase());

// // make into array
// console.log(s.split(""));
// console.log(y.split(', '));

// /* multi
// line
// comment
// */

// // Arrays - variables that hold multiplie values

// const numbers = new Array(1,2,3,4,5); //new is a constructor and is to constructing Array.
// console.log(numbers);
// console.log(numbers[4]);

// const fruits = ['apples', 'oranges', 'pears', 10, true]; //in Javascript, you can use different type in one array.
// console.log(fruits);
// console.log(fruits[1]);

// fruits[4] = 'grapes'; //adding array.
// console.log(fruits);

// fruits[1] = 'banana'; //this replace the word in array not add.
// console.log(fruits);

// fruits.push('kiwi', 'lemon');
// console.log(fruits);

// fruits.unshift('strawberry'); // add to the beginning
// console.log(fruits);

// fruits.pop(); //remove the last one out
// console.log(fruits);

// console.log(Array.isArray(fruits)); //check whether the fruits is the array or not. TRUE
// console.log(Array.isArray('hello')); //check whether the fruits is the array or not. FALSE

// console.log(fruits.indexOf('kiwi'));


// Values and properties
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: '30',
    hobbies: ['music', 'sports', 'movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName, lastName} = person;
// console.log(firstName);

// const { firstName, lastName, age, hobbies, address: {street, city, state}} = person;
// console.log(hobbies[0]);
// console.log(city);

// person.email = 'john@gmail.com'; //adding property
// console.log(person);


// Values in Array and object

const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
]

console.log(todos);
console.log(todos[1].text);
console.log(todos[2].isCompleted);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

