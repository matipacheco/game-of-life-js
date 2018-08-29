export function getRandomTerminalStates() {
    return Math.floor(Math.random() * 2);
}

export function getNextState(state) {
    return (state + 1) % 5;
}

export function getTerminalStates() {
    return [0, 1];
}

export function getIntermediateStates() {
    return [2, 3];
}