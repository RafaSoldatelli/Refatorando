const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//numbers.forEach(number => {
//    console.log(number * 2);
//});


//numbers.forEach(function(number) {
//    return console.log(number * 2);
// });


// const doubled = numbers.map(number => console.log(number * 2));
// console.log(doubled);


// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}