function random_terminal_state() {
  return terminal_states()[Math.floor(Math.random() * 2)];
}

function next_state(state) {
  return (state + 1) % 4;
}

function alive_states() {
  return [2, 3];
}

function dead_states() {
  return [0, 1];
}

function terminal_states() {
  return [0, 2];
}

function intermediate_states() {
  return [1, 3];
}

export default random_terminal_state;