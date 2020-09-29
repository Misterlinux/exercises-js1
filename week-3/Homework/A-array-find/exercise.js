/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

/*
var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);
*/
/* EXPECTED OUTPUT */
// "Alexandra"


const scores = [80, "INDEED", 47];
const values = [20, "MAYBE", 90];

scores[2] = values[1]; 
scores[5] = values[2]; 
scores[1] = scores[1].toLowerCase();


console.log(scores);
console.log(scores.length);
console.log(scores.sort());
const concavo = (scores.concat("concavo").sort().slice(2,5).join(" and "))

console.log(concavo);
//console.log(concavo.sort())
//it starts on the first but doesnt include the second
console.log(concavo.slice(0,2))
console.log(concavo.slice(2,4))

//console.log(scores.includes("indeed"));

function checko(mas){
  return mas.forEach( (ull) => {
    if (ull == "indeed"){
      console.log(ull == "indeed")
    }
    else{
      console.log("not yet")
    }
  })
}

function mosto(lil){
  return lil.map( (ops) => {
    if(ops > 20){
      return "its a number"
    }
    else{
      return "not yet"
    }
  })
}

console.log("ok so, here the function should exist")
checko(scores)
console.log( mosto(scores) )

console.log(scores.join(" and "));

function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3];
let numbersDoubled = numbers.map(double);

console.log(numbersDoubled);

const triple = numbersDoubled.map((number) => {
  return number + 3;
});

console.log(triple);
/*
const names = ["Daniel", "mozafar", "irina"];

names.forEach(function (name, index) {
  console.log(index + ": " + name);
});

console.log(names);
*/
const testScores = [90, 50, 100, 66, 25, 80, 81];

function isHighScore(score) {
  return score > 80;
}

const highTestScores = testScores.filter(isHighScore);

console.log(highTestScores); 


var listan = ["primo", "antonio", "6mister", " space", "easyng"];


function thearr(mint){
  return mint.find( (arr) => {
    return arr[0] == "e" && arr.length < 7
  })
}
//rememeber that spaces are considered typos with their space
var indeed = thearr(listan)

console.log(indeed);

function finalin(finn){
  return finn.forEach( (fiona) => {
    console.log(fiona.length > 5 && fiona.length < 7)
  })
}

finalin(listan)

function finnone(tuk){
  return tuk.map( (tin) => {
    return tin.length
  })
}

console.log(finnone(listan))