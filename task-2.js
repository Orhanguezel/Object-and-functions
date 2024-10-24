// Task 2

const vehicle1 = {
    type:"car",
    color:"red",
    brand:"BMW",
    mileage: 1000,
};
const vehicle2 = {
    type:"van",
    color:"blue",
    brand:"Mercedes",
    mileage: 200000,
};
const vehicle3 = {
    type:"truck",
    color:"black",
    brand:"Volvo",
    mileage: 300000,
};

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);

// Task 2.1

function needsRevision(vehicle) {
    return vehicle.mileage>60000?true:false;
}

console.log(`Does vehicle1 need revision?`, needsRevision(vehicle1));
console.log(`Does vehicle2 need revision?`, needsRevision(vehicle2));
console.log(`Does vehicle3 need revision?`, needsRevision(vehicle3));
