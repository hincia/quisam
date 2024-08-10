const min = 10;
const max = 50;
let lo = 5;  // Initial lo is below min
const span = 20;

const adjustedRange = adjustRange(min, max, lo, span);
console.log(adjustedRange); // Output: [10, 30]
