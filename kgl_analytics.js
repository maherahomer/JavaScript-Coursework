////////////////////////////////////////////////////////////////
// Coursework 3: KGL Analytics and Reporting System
////////////////////////////////////////////////////////////////


 //          Part A: Higher Order Functions - Data Transformation
      

// first create data array
let procurementRecords = [
    { id: 1, dealerName: "Maher Adam", produceType: "Beans", tonnageInKgs: 4700, costInUgx: 350000, procurementDate: new Date('2025-01-10') },
    { id: 2, dealerName: "Zahra Ibra", produceType: "Maize", tonnageInKgs: 800, costInUgx: 290000, procurementDate: new Date('2025-01-11') },
    { id: 3, dealerName: "Kitsa Ali", produceType: "Peas", tonnageInKgs: 1200, costInUgx: 450000, procurementDate: new Date('2025-01-12') },
    { id: 4, dealerName: "Omaima Hassan", produceType: "Soy", tonnageInKgs: 370, costInUgx: 800000, procurementDate: new Date('2025-01-13') },
    { id: 5, dealerName: "Kitsa Ali", produceType: "Beans", tonnageInKgs: 100, costInUgx: 75000, procurementDate: new Date('2025-01-14') },
    { id: 6, dealerName: "Maher Adam", produceType: "G-nuts", tonnageInKgs: 600, costInUgx: 300000, procurementDate: new Date('2025-01-15') }
];

// Map method - Calculate costPerKg (to add new property with it value to each obiect)
const recordsWithCostPerKg = procurementRecords.map(record => {
    return {
        ...record, 
        costPerKg: record.costInUgx / record.tonnageInKgs
    };
});

console.log("Records with Cost Per Kg:", recordsWithCostPerKg);

// using Filter method to create a new array containing only procurement records where Tonnage >= 1000 
const highTonnageRecords = procurementRecords.filter(record => record.tonnageInKgs >= 1000);
console.log("@////////////////////////////////////@")
console.log("Filtered Records (>=1000kg):", highTonnageRecords);
console.log("@////////////////////////////////////@")
console.log("Count of filtered records:", highTonnageRecords.length);

// 4using Reduce method to calculate total tonnage and The total cost of all records
let totalTonnage = procurementRecords.reduce((sum, record) => sum + record.tonnageInKgs, 0);
let totalCost = procurementRecords.reduce((sum, record) => sum + record.costInUgx, 0);
console.log("@////////////////////////////////////@")
console.log(`Total Tonnage Procured: ${totalTonnage} kgs`);
console.log("@////////////////////////////////////@")
console.log(`Total Procurement Cost: ${totalCost} UGX`);


//       Part B: Sets for Unique Data Management
             
                 
// Identify unique Dealers Set as an array
function getUniqueDealers(records) {
    let dealerNames = records.map(r => r.dealerName);
    let uniqueDealersSet = new Set(dealerNames);
    return Array.from(uniqueDealersSet);
}

const uniqueDealers = getUniqueDealers(procurementRecords);
console.log("Unique Dealers:", uniqueDealers);

// for creating Role Authorization Set 
const authorizedRoles = new Set(['Manager', 'Director']);

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

console.log("Manager authorized?", isAuthorizedForProcurement('Technition'));
