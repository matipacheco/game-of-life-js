/*
* NOTA PARA EL FUTURO
*
* import {getRandomTerminalStates} from "./life_state_manager.js";
* export function getRandomTerminalStates()....
*
* */

const COLORS = { 0 : "black", 1 : "black", 2 : "white", 3 : "white" };


class Cell {
    constructor() {
        this._lifeState = getRandomTerminalStates();
    }

    get lifeState() {
        return this._lifeState;
    }
}


function getRandomTerminalStates() {
    return getTerminalStates()[Math.floor(Math.random() * 2)];
}

function getNextState(state) {
    return (state + 1) % 5;
}

function getColor(state) {
    return COLORS[state];
}

function getTerminalStates() {
    // 0 : dead, 2 : alive
    return [0, 2];
}

function getIntermediateStates() {
    // 1 : dead, 3 : alive
    return [1, 3];
}


function populateCluster() {
    const row = ".row_", col = ".col_";

    let cell, cell_grid;

    for (let row_index = 1; row_index <= 5; row_index++) {
        for (let col_index = 1; col_index <= 5; col_index++) {
            cell      = new Cell();
            cell_grid = $(row + row_index).filter(col + col_index);
            cell_grid.css("background-color", getColor(cell.lifeState));
        }

    }
};

populateCluster();