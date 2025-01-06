// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((total, current) => total + current, 0);
// console.log(sum);

// const users = [{name: 'Rafael', age: 25}, {name: 'Bob', age: 25}];
// const user = users.find(user => user.age === 25);
// console.log(user);

const ages = [30, 25, 17, 40];

// const areAdults = ages.every(age => age >= 18);
// console.log(areAdults);

const hasUnderAge = ages.some(ages => ages < 18);
console.log(hasUnderAge);