////////////////////////////////////////////////////////////////
// Coursework 1: KGL Data Validation System
////////////////////////////////////////////////////////////////

                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 //       Part A: Variable Declaration and Type Checking
                 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const companyName = "Karibu Groceries LTD"; 
/* I used 'const' for companyName because the company's
 registered name is unlikely to change */
const minimumTonnage = 1000; 
// I used 'const' for minimumTonnage as this is a fixed business rule
let isOperational = true; 
/* I used 'let' for isOperational because the
 status can change from true to false*/
let managerName; 
// I used 'let' for managerName because it is currently undefined and will be assigned later.
const closedBranches = null;
// I used const because null represents a fixed known empty state

//  checking the type
    console.log(typeof companyName);
    console.log(typeof minimumTonnage);
    console.log(typeof isOperational);
    console.log(typeof managerName);
    console.log(typeof closedBranches); 

                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//       Part B: String Manipulation and Validation 
                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let dealerNameInput = "  maher adam HASSAN   ";
// Removes whitespace and convert to Title Case
let trimmedName = dealerNameInput.trim();
let cleanDealerName = trimmedName.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

        console.log(`Cleaned Dealer Name: ${cleanDealerName}`);
// Validatition by Check the length >= 2 to confirm is not empty
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
         console.log("Valid dealer name");
} else {
         console.log("Invalid dealer name");
}
                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//          Part C: Conditional Logic and Business Rules 
                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// first am going to decleare the variables
let userRole = 'Sales Agent';
let procurementTonnage = 1650;
let produceType = 'Beans';
let costInUgx = '56700';

// here to apply KGP rules 

// for Sales Agent Check
if (userRole === 'Sales Agent') {
    console.log("Error: Sales Agents cannot record produce entries.");
} else {
    // if no proceed
    
    // To check tonnage (>= 1000)
    if (procurementTonnage >= 1000) {
        console.log("Tonnage valid.");
    }

    // Cost Check (Convert to number, >= 10000)
    let costNumeric = Number(costInUgx);
    if (costNumeric >= 10000) {
        console.log("Cost valid.");
    }
}
                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//          Part D: Arrays and Produce Management
                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

                // starting by creating an array
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];

// Array manipulations 
kglProduce.push("Green Peas"); // Add to end
kglProduce.shift(); // Remove first item
let hasGnuts = kglProduce.includes("G-nuts"); // Check existence of G-nut

console.log(kglProduce);
console.log("Length of array:", kglProduce.length);

// Merge arrays
let branch2Produce = ['Maize', 'Beans'];
let allProduce = kglProduce.concat(branch2Produce);
console.log(allProduce);
