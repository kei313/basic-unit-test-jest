// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function () {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function as it's supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 dollar is 127.9 yen, then the result should be 127.9
    const expected = 1 * 127.9;

    // This is the comparison for the unit test
    expect(yen).toBe(expected);
});

test("One yen should be 0.8 pounds", function () {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function as it's supposed to be used
    const pounds = fromYenToPound(1);

    // If 1 yen is 0.8 pounds, then the result should be 0.8
    const expected = 1 * 0.8;

    // This is the comparison for the unit test
    expect(pounds).toBe(expected);
});
