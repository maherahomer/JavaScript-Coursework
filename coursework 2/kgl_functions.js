////////////////////////////////////////////////////////////////
// Coursework 2: KGL Inventory Processing System
////////////////////////////////////////////////////////////////

                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 //           Part A: Function Implementation 
                 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Calculating the procurement cost
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (typeof tonnageInKg !== 'number' || tonnageInKg < 0 || 
        typeof pricePerKg !== 'number' || pricePerKg < 0) {
        return "Invalid input";
    }
    return tonnageInKg * pricePerKg;
}
// To validate the buyer name
const validateBuyerName = (buyerName) => {
    // Returns true if length >= 2 and not empty
    return (buyerName.length >= 2 && buyerName !== "");
};

//  To check the user authorization type
function checkUserAuthorization(role) {
    switch (role) {
        case 'Manager':
            return "procurement_and_sales";
        case 'Sales Agent':
            return "sales_only";
        case 'Director':
            return "view_aggregations";
        default:
            return "unauthorized";
    }
}

                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 //       Part B: Object Creation and Manipulation
                 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// First creating the salse record functions

function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return {
        id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}
// Create object and modify it
let sale1 = createSalesRecord("Beans", 500, "Maher Adam ", 2500000);

sale1.branch = "Maganjo"; // To add property via dot notation
sale1.isCreditSale = true; // to modify the property
sale1['dueDate'] = "2026-02-9"; // here to add it via bracket notation

console.log("Property Names:", Object.keys(sale1));

// to make Iteration
for (let key in sale1) {
    console.log(`Property: ${key}, Value: ${sale1[key]}`);
}

                //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 //             Part C: Loop Implementation and Data Processing
                 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// First by create an array of daily procurement tonnages for a week
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = 0;

for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}

let averageTonnage = totalTonnage / weeklyTonnage.length;
console.log("Total Tonnage:", totalTonnage);
console.log("Average Tonnage:", averageTonnage);

// Creating 5 records form previous salse record
let salesRecords = [
  {id: 2134, produceName: "Beans", buyerName: "Maher Adam", amountPaid: 2500000,
    saleDate: "2025-12-20", isCreditSale: true, branch: "Mengo", dueDate: "2026-01-09"},
  {id: 2134, produceName: "Beans", buyerName: "Jhone Fab", amountPaid: 2500000,
    saleDate: "2025-12-20", isCreditSale: true, branch: "Katwe", dueDate: "2026-01-09"},
  {id: 2134, produceName: "Beans", buyerName: "Zahra Adil", amountPaid: 2500000,
    saleDate: "2025-12-20", isCreditSale: true, branch: "Maganjo", dueDate: "2026-01-09"},
  {id: 2134, produceName: "Beans", buyerName: "Mustafa Ibrahim", amountPaid: 2500000,
    saleDate: "2025-12-20", isCreditSale: true, branch: "Kawala", dueDate: "2026-01-09"},
  {id: 2134, produceName: "Beans", buyerName: "Maher Adam", amountPaid: 2500000,
    saleDate: "2025-12-25", isCreditSale: true, branch: "Maganjo", dueDate: "2026-01-09"}
];

let creditSalesCount = 0;

for (let record of salesRecords) {
    if (record.isCreditSale !== true) {
        continue; // To skip non-credit sales
    }
    creditSalesCount++;
}
console.log(`Total credit sales: ${creditSalesCount}`);