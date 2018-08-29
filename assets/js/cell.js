import {getRandomTerminalStates} from "./life_state_manager.js";

export class Cell {

    constructor() {
        this._lifeState = getRandomTerminalStates();
    }

    get lifeState() {
        return this._lifeState;
    }
}