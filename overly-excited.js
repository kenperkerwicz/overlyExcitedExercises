let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
["I", "hope", "you", "are", "well"];
 let cath = ["what", "is", "up", "bro", "dude", "big", "face"]


 function addExcitement (theWordArray) {
  let buildMeUp = ""
   let wordCounter = 1

for (let i = 0; i < theWordArray.length; i++) {
    if (wordCounter % 3 === 0) {
         buildMeUp += `${theWordArray[i]} ! `
     } else {
         buildMeUp += `${theWordArray[i]} `
    }
     wordCounter++    
 }
}

 addExcitement(car)


// let cat = ["the", "cat", "has", "nine", "lives", "doesnt", "it"]

// function stringCon (arrayInput) {
// buildUp = " "
// myCounter = 1;
// for (let i = 0; i < arrayInput.length; i++) {
//     const element = arrayInput[i];
//      buildUp += ' ' + element;
//     console.log(buildUp);
//     }
// }
// stringCon(cat);

// const rufusTheDog = {
//   age: 4,
//   species: "Dalmatian",
//   contentsOfStomach: [],
//   eat: function (item) {
//       rufusTheDog.contentsOfStomach.push(item)
//   },
//   puke: function () {
//       rufusTheDog.contentsOfStomach.clear()
//   },
//   bark: function (something) {
//       window.alert(`Rufus barks 'WOOF!' at ${something}`)
//   }
// }

// const rubbberDucky = {
//  colors: ["green", "Orange", "white", "black"],
//  size: "S",
//  noise: "High squeak",
//  material: "plastic",
//  float: true,
//  squeak: function () {
//    window.alert("sqeak")
//  }
// }

// rubbberDucky.squeak();



// let mealArray = [chickenComboMeal, beefComboMeal, fishComboMeal];

 // BOBS BURGERS //


// const restaurant = {
//   orders : [],
//   name: "Bob's Burgers",
//   placeOrder: function (meal) {
//     this.orders.push(meal)
//   },
//   allOrders: function () {
//     return this.orders
//   }
// }
// const chickenComboMeal = {
//   sandwichType: "chicken",
//   fries: true,
//   drinkSize: "S"
// }
// const beefComboMeal = {
//   sandwichType: "beef",
//   fries: true,
//   drinkSize: "M"
//   }
//  const fishComboMeal = {
//   sandwichType: "fish",
//   fries: true,
//   drinkSize: "L"
//   }
// // Place an order
// restaurant.placeOrder(chickenComboMeal)
// restaurant.placeOrder(beefComboMeal)
// restaurant.placeOrder(fishComboMeal)

// // restaurant.allOrders()

// // // Invoke the function to return the list of all orders

// const allOrders = restaurant.allOrders()

// // // Output all orders to the console using console.table()

// console.table(allOrders)



// Questions!!



//Q1 //
var foo = 0;

function myFunc(){
  foo= 500;
}
myFunc();
console.log(foo); //500

// //Q2//

var myObject = {
  key1: "a string",
  key2: "another string"
}

var key;
for (key in myObject) {
   console.log(key + " : " + myObject[key]);
}


// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.


// function numberFunct (num1, num2) {
//  let answer = num1 + num2;
//  console.log(answer)
// }

// function subFunct (num1, num2) {
//   console.log(num1 - num2)
// }

// const addTwoNumber = (first, second) => console.log(first + second)

// const subTwoNumbers = (first, second) => console.log(first - second)

// numberFunct(3,2);
// subFunct(5,4);
// addTwoNumber(6,4);

// Create another function called `calculate` that takes three arguments: two numbers and a function

// function calculate (num1, num2, calc) {
//   calc(num1, num2)
//  }

// calculate(8, 3, subTwoNumbers)
// calculate(10, 5, subTwoNumbers)



// calculate(22, 7, (first, second) => {
//   console.log(first/second)
// }
// )