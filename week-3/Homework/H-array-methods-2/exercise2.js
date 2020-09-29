/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  return str.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
};

function capitalis(str) {
  var name = str.toLowerCase().split();
  var newName = [];
  for (i = 0; i < name.length; i++) {
    newName.push(name[i].charAt(0).toUpperCase() + name[i].slice(1));
  }
  return newName.join(' ');
}

function capitali(str) {
  let arrStr = str.toLowerCase().split("");
  arrStr[0] = arrStr[0].toUpperCase();
  return arrStr.join("");
}

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
function AlongName (name){
  return name.length > 4;
}
var longNameThatStartsWithA = names.find(AlongName);

console.log(longNameThatStartsWithA);
console.log("ora");

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));
console.log(capitalis("MAYBE"));
console.log(capitali("lOrO"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

var pairsByIndex= pairsByIndexRaw.filter(
  function(item){
    if(typeof item ==='object' && item!==null && item.length >1 ){
      return true;
    }
  }); // Complete this statement

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];
var pairsByIndex = pairsByIndexRaw.filter(function (hello){
   if(hello != null &&  hello.length == 2)
    {
   return true;
    }
  // < 2 && hello == null && hello == false && typeof hello != String) {
  // // return false
  }
)
var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});