let inputs = prompt("Enter a list of comma-separated froyo flavors: ");
let flavors = inputs.split(',');

function countFrequencies(flavorsArray) {
    let flavorCounts = {};

    for (let flavor of flavorsArray) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }
    return flavorCounts;
}

let flavorOrderCounts = countFrequencies(flavors);

console.log("Here's how many of each froyo flavor you ordered:", flavorOrderCounts);