let inputs = prompt("Enter a list of comma-separated froyo flavors: ");
let flavors = inputs.split(',');

let flavorCounts = {};

for (let flavor of flavorsArray)
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
    return flavorCounts;