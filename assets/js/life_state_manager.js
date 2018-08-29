function getRandomTerminalStates() {
    return Math.floor(Math.random() * 2);
}

function getNextState(state) {
    return (state + 1) % 5;
}

function getIntermediateStates() {
    return [0, 1];
}

function getIntermediateStates() {
    return [2, 3];
}