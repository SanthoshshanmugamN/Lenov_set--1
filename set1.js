function findMax() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const maxElement = Math.max(...array);
    document.getElementById('maxResult').textContent = "Maximum element: " + maxElement;
}

// two sum

let user = {
    username: '',
    operator: ''
};

function signup() {
    user.username = document.getElementById('username').value;
    user.operator = document.getElementById('operator').value;

    if (user.username !== '') {
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('calcContainer').style.display = 'block';
    } else {
        alert("Please enter a valid username.");
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (user.operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Output: ${result}`;
}

// target
function calculateTwoSum() {
    // Get the input values
    let arrayInput = document.getElementById("arrayInput2").value.split(',').map(Number);
    let target = parseInt(document.getElementById("targetInput").value);
    let output = document.getElementById("output2");

    // Create a map to store the indices of the numbers
    let numMap = new Map();

    // Loop through the array
    for (let i = 0; i < arrayInput.length; i++) {
        let complement = target - arrayInput[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // Display the result
            output.innerHTML = `Indices: [${numMap.get(complement)}, ${i}]`;
            return;
        }

        // Store the index of the current number in the map
        numMap.set(arrayInput[i], i);
    }

    // If no solution is found, display a message
    output.innerHTML = "No two numbers add up to the target.";
}