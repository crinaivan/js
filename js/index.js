//const divisibility = (number) => {
//    if (number % 10 === 0){
//        return "TRUE"
//    }else {
//        return "FALSE"
//    }
//} 
//
//
//
//const result = divisibility(100)
//console.log(result)


//tellFortune

//const NumarCopii = 2;
//const NumePartener = "Mihai";
//const LocatieGeogafica = "Oradea";
//const LocDeMunca = "Programator";
//
//const tellFortune = (n, z, y, x) => {
//     return "Vei fii un " + x + " in " + y + " casatorita cu //" + z + " vei avea " + n + " copii.";
//}
//
//console.log(tellFortune(NumarCopii, NumePartener, //LocatieGeogafica, LocDeMunca));


//switch

//let number = "5";
//let day;
//
//switch (number) {
//    case "1":
//        day = "Luni";
//        break;
//    case "2":
//        day = "Marti";
//        break;
//    case "3":
//        day = "Miercuri";
//        break;
//    case "4":
//        day = "Joi";
//        break;
//    case "5":
//        day = "Vineri";
//        break;
//    case "6":
//        day = "Sambata";
//        break;
//    case "7":
//        day = "Duminica";
//        break;    
//}
//
//console.log(day);

//Inceput cu litere mari

// let name = "ivan";
// let firstname = "crina";
// let fullname = "ivan crina";

// fullname = fullname.split(" ");
// let firstLetter = fullname[0];

// fullname[0] = firstLetter.toUpperCase();

// console.log(fullname);

// for(let i = 0; i<fullname.length; i++) {
//     fullname = fullname + fullname[i];
// }


//1. Tipăriți toate numerele pare de la 0 la 10

function printEvenNumbers() {
    for (let i = 0; i <= 10; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers();


  //2. Calculați suma numerelor dintr-un șir de numere

  //EX : 1
 function sumArrayDeclarative(array) {
    return array.reduce((acc,curr) => acc + curr, 0);
 }

  const numbers = [1, -5, 20, -34, 16, 29, 36, -4];
  console.log(sumArrayDeclarative(numbers));

  //EX : 2
function sumArrayImperative(array) {
    return array.reduce((acc,curr) => acc + curr, 0);
}

const numbers = [3.45, -2.68, 356, -75.96, 64, 19.28];
console.log(sumArrayImperative(numbers));

// 3. Creați o funcție care inversează un șir de numere

let number = [1, -5, 20, -34, 16, 29, 36, -4];

const reverseNumber = number.reverse();

console.log(reverseNumber);

//4. Returnează numărul de vocale dintr-un șir de caractere (string)
const str = "string de test";
const words = str.split("");

function getVowelCount() {
    return words.filter(word => word.match(/[iee]/gi)).length;
}

console.log(getVowelCount());

