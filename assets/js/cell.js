class Cell {
    lifeState;

    constructor() {
        this.lifeState = getRandomTerminalStates();
    }

    get lifeState() {
        return this.lifeState;
    }
}