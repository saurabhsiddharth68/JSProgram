var prompt = require('prompt-sync')();
var integer = prompt("Enter The Number =");

var primeArray = [];

//find divisors starting with 2

for (i = 2; i < integer/2; i++) {
    var isPrime = 0;
  if (integer % i == 0) {

    //check if divisor is prime
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}