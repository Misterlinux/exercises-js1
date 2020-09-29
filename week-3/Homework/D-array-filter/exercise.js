/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

// Complete this statement

var pairsByIndex = pairsByIndexRaw.filter((n) => n % 2 !== 0 && typeof n !== `string` && n.length > 1);
console.log(pairsByIndex);

/*
var pairsByIndex = pairsByIndexRaw.filter(function verdaderoyfalso (hello){
   if( hello != null && hello.length == 2)
    {
   return true;
    }
  }
)
*/

 // Complete this statement

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];//
  var mentor = mentors[indexes[1]];//
  return [student, mentor];
});

// small 2 el array as element inside the array
console.log(pairs);

name = "Donner is it";
console.log(name[0]);

function startsWithD (name){
	return console.log(name[0] === 'D');
}

startsWithD(name)
