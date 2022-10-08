//create a variable to hold the quantity of available plane seats left on a flight
let planeSeats = 42;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 123.45;

//create a variable to hold a person's middle initial
let middleInit = 'M';

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
//create a variable to hold a customer's first name
let customerFirstName = 'John';

//create a variable to hold a street address
let streetAddress = '5214 N 69th Pl';

//print all variables to the console
console.log(planeSeats);
console.log(costOfGroceries);
console.log(middleInit);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
planeSeats = planeSeats - 2;
console.log(planeSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInit = 'N';
console.log(middleInit)

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside)

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
fullName = customerFirstName + ' ' + middleInit + ' Smith';

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hello World! Its my pleasure to indroduce Mr. ' + fullName + ' located at ' + streetAddress + '.');