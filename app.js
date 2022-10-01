console.log('hello world');

// let dogName = 'Finley';
// let age = 3;
// let breed = 'Golden Doodle';

// console.log(`My dog's name is ${dogName}`);
// console.log(`${dogName} is very cute.`);
// console.log(`${dogName} is a ${breed} and is ${age} years old.`);

// let dogName2 = 'Benny';
// let age2 = 7;
// let breed2 = 'Terrier Mix';

// console.log(`My dog's name is ${dogName2}`);
// console.log(`${dogName2} is very cute.`);
// console.log(`${dogName2} is a ${breed2} and is ${age2} years old.`);

// parameters vs arguments
// parameters are part of function definition
function describeDog(dogName, age, breed) {
    console.log(`My dog's name is ${dogName}`);
    console.log(`${dogName} is very cute.`);
    console.log(`${dogName} is a ${breed} and is ${age} years old.`);
}

// arguments are part of the function call
describeDog('Benny', 7, 'Terrier-Mix');
describeDog('Finley', 4, 'Golden-Doodle');

// the following function definitions are equivalant

// function myFunc() {
//     console.log('this is my function');
// }

// const myFunc = () => {
//     console.log('this is my function');
// };
