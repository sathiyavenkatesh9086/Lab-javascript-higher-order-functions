// Function #1: Array Slice;
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1,4)
console.log(foods)

// function  #2: Array Spliceconst

var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood1 = food.splice(2, 0, "noodles", "icecream");
console.log(food);

//Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEvan(numberArray) {
  return numberArray.filter(function (number) {
    if (number % 2 == 0) {
      return number;
    }
  });
}

var even = isEvan(numberArray);
console.log(even);

//prime number

function isPrime(numberArray) {
    return numberArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
      }
      return true;
    });
  }
  
  var prime = isPrime(numberArray);
  console.log(prime);



// //Function #4: Reject


function nonPrime(numberArray) {
    return numberArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return true;
      }
      return false;
    });
  }
  
  var nonprime = nonPrime(numberArray);
  console.log(nonprime);

  //lambda

  function isEven(numberArray)
  {
      return numberArray.filter(n => n %2 == 0)
  }
 var eve =isEven(numberArray)
 console.log(eve)

 
// //Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
let length = myArray.map(function(num){
    return num*num
});
console.log(length)
}


// //Function #7: Reduce

// const myArray1 = [2, 3, 5, 10];

function multiply(...myArray1) {
console.log(myArray1.reduce(function(acc,init){
    return acc*init

}));
}
multiply(2,3,5,10);