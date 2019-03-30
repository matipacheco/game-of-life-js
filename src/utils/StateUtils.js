/***
 * Method that return a random terminal state (0 or 2)
 * @returns {number}
 */
function randomTerminalState() {
  return terminalStates()[Math.floor(Math.random() * 2)];
}


/***
 * Given a number between 0 and 3, this method returns the next number in the series.
 * It defines the following cycle/loop: 0, 1, 2, 3, 0, 1, 2, 3, 0, ...
 * @param state
 * @returns {number}
 */
function nextState(state) {
  return (state + 1) % 4;
}


/***
 * Method that returns the state in which a cell is considered alive
 * @returns {number[]}
 */
function aliveStates() {
  return [2, 3];
}


/***
 * Method that returns the state in which a cell is considered dead
 * @returns {number[]}
 */
function deadStates() {
  return [0, 1];
}


/***
 * Method that returns the so called Terminal states.
 * 0 and 2... alive or dead
 * @returns {number[]}
 */
function terminalStates() {
  return [0, 2];
}


/***
 * Method that returns the so called Intermediate states.
 * 1 and 3... being born or dying
 * @returns {number[]}
 */
function intermediateStates() {
  return [1, 3];
}


/***
 * Method that checks if a cell is alive
 * @param state
 * @returns {boolean}
 */
function isAlive(state) {
  return aliveStates().includes(state);
}


/*
/!***
 * Method that checks if a cell is dead
 * @param state
 * @returns {boolean}
 *!/
function isDead(state) {
  return !isAlive(state);
}
*/


export {
  randomTerminalState,
  intermediateStates,
  nextState,
  deadStates,
  isAlive
};
