// this is my function that sums two numbers
const sum = (a, b) => {
  return a + b;
};

// just a console log for ourselves.
console.log(sum(7, 3));

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
  // convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.2;
  //return the dollar value
  return valueInDollar;
};

// Function to convert dollars to yen
const fromDollarToYen = function (valueInDollar) {
  // Convert the given valueInDollar to yen using the conversion rate
  let valueInYen = valueInDollar * 127.9;
  // Return the yen value
  return valueInYen;
};

// Function to convert yen to pounds
const fromYenToPound = function (valueInYen) {
  // Convert the given valueInYen to pounds using the conversion rate
  let valueInPound = valueInYen * 0.8;
  // Return the pound value
  return valueInPound;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
