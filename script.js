// Function Declaration
function calculateDouble(number){
    return number * 2;
}

console.log("Double of 5:", calculateDouble(5));

//Modern ES6 Arrow Function (Cleaner Syntax)
const greetUser = (name) =>{
    return `Welcome to Day2 ${name}!`;
};

console.log(greetUser("Chris"));

//Select our HTML elements using document.getElementById
const countDisplay = document.getElementById("count-display")
const decrementBtn = document.getElementById("decrement-btn")
const incrementBtn = document.getElementById("increment-btn")

const resetBtn = document.getElementById("reset-btn")
const stepInput = document.getElementById("step-input")
const message = document.getElementById("message")

// 2. Track state variables
let count = 0;

const MAX_LIMIT = 20
const MIN_LIMIT = -20

// Function to update the number on screen
const updateDisplay = () =>{
    countDisplay.textContent=count
    // Change color based on value
    if (count > 0){
        countDisplay.style.color = "green";
    }

    else if (count < 0){
        countDisplay.style.color = "red";
    }

    else{
        countDisplay.style.color = "#333";
    }

    // Feature B: Check for limits (-20 to 20)
    if (count >= MAX_LIMIT){
        message.textContent = "Maximum limit (+20) reached!"
    }

    else if (count <= MIN_LIMIT){
        message.textContent = "Minimum limit (-20) reached!"
    }

    else{
        message.textContent = ""
    }
}

// 4. Helper function to read current step value
const getStepSize = () =>{
    // Convert input value string to integer (default to 1 if empty)
    return parseInt(stepInput.value) || 1
}

// Listen for the clicks on the Increment button
incrementBtn.addEventListener("click", () =>{
    const step = getStepSize()
    if (count + step <= MAX_LIMIT){
        count += step
        updateDisplay()
    }
});

decrementBtn.addEventListener("click", () =>{
    step = getStepSize()
    if (count - step >= MIN_LIMIT){
        count -= step
        updateDisplay()
    }
})

// Feature C: Reset button logic
resetBtn.addEventListener("click", () =>{
    count = 0
    stepInput.value = 1 // Reset step input back to 1
    updateDisplay()
})
