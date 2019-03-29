function randomTerminalState() {
  return terminalStates()[Math.floor(Math.random() * 2)];
}

function nextState(state) {
  return (state + 1) % 4;
}

function aliveStates() {
  return [2, 3];
}

function deadStates() {
  return [0, 1];
}

function terminalStates() {
  return [0, 2];
}

function intermediateStates() {
  return [1, 3];
}

export default randomTerminalState;
