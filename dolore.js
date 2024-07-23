const LED_STATE_ON = 1;
const LED_STATE_OFF = 0;

let currentState = LED_STATE_OFF; // Initially off

// Later in the code, depending on some conditions, you might set the state to on
currentState = LED_STATE_ON;

// Function example using the state
function setLedState(state) {
    if (state === LED_STATE_ON) {
        // Code to turn LED on
        console.log('LED is now on');
    } else {
        // Code to turn LED off
        console.log('LED is now off');
    }
}

setLedState(currentState); // Outputs: 'LED is now on'
