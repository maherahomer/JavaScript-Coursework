function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (typeof tonnageInKg !== 'number' || tonnageInKg < 0 || 
        typeof pricePerKg !== 'number' || pricePerKg < 0) {
        return "Invalid input";
    }
    return tonnageInKg * pricePerKg;
}

const validateBuyerName = (buyerName) => {
    // Returns true if length >= 2 and not empty
    return (buyerName.length >= 2 && buyerName !== "");
};

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