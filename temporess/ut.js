let condition = true; // Example condition

// Function to copy the original sheet if condition is true, and then delete rows
function processSheet() {
    if (condition === true) {
        copyOriginalSheet();
        deleteRows();
    }
}

// Calling the function to initiate the process
processSheet();
