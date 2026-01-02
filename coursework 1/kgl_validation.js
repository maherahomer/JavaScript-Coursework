
 //       Part A: Variable Declaration and Type Checking
const companyName = "Karibu Groceries LTD"; 
/* I used 'const' for companyName because the company's
 registered name is unlikely to change */
const minimumTonnage = 1000; 
// I used 'const' for minimumTonnage as this is a fixed business rule
let isOperational = true; 
/* I used 'let' for isOperational because the
 status can change from true to false (e.g., during holidays)*/
let managerName; 
// I used 'let' for managerName because it is currently undefined and will be assigned later.
const closedBranches = null;
// I used const because null represents a fixed known empty state

//  checking the type
    // console.log(typeof companyName);
    // console.log(typeof minimumTonnage);
    // console.log(typeof isOperational);
    // console.log(typeof managerName);
    // console.log(typeof closedBranches); 

//       Part B: String Manipulation and Validation 

let dealerNameInput = "  maher adam HASSAN   ";
// Removes whitespace and convert to Title Case
let trimmedName = dealerNameInput.trim();
let cleanDealerName = trimmedName.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

        console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
         console.log("Valid dealer name");
} else {
         console.log("Invalid dealer name");
}