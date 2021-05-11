
/* 
function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));

*/
/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();

*/

function makeMultiplier(multiplier) { 

  var myFunc = function (x) { 

    return multiplier * x; 

  }; 

 

  return myFunc; 

} 

 

var multiplyBy3 = makeMultiplier(3); 

console.log(multiplyBy3(10)); 

var doubleAll = makeMultiplier(2); 

console.log(doubleAll(100));
