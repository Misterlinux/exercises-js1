// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function maybe(m){
    return m * 100;
}

var numbers = numbers.map(maybe)

console.log(numbers)

var numeron = numbers.map(function forse(f){ return f * 10});

console.log(numeron)

var mero = numbers.map((l) => {return l *2} ) 

console.log(mero)

var ultimo = numbers.map( (o) => o * 5)

console.log(ultimo);