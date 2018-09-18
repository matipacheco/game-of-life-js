/*
* NOTA PARA EL FUTURO
*
* import {getRandomTerminalStates} from "./life_state_manager.js";
* export function getRandomTerminalStates()....
*
* */

const COLORS = { 0 : "black", 1 : "black", 2 : "white", 3 : "white" };


class Cell {
    constructor(row, col) {
        this._row = row;
        this._col = col;
        this._lifeState = getRandomTerminalStates();
    }

    get lifeState() {
        return this._lifeState;
    }

/*    get cellPos() {
        return this._row, this._col;
    }*/
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


function changeCellColor(cell_grid, cell) {
    cell_grid.css("background-color", getColor(cell.lifeState));
}


function populateCluster(dimension) {
    let cluster = [];

    let cell, cell_grid;
    const row = ".row_", col = ".col_";

    for (let row_index = 1; row_index <= dimension; row_index++) {
        let cluster_row = [];

        for (let col_index = 1; col_index <= dimension; col_index++) {
            cell = new Cell(row_index, col_index);
            cluster_row.push(cell);

            cell_grid = $(row + row_index).filter(col + col_index);
            changeCellColor(cell_grid, cell);
        }

        cluster.push(cluster_row);

    }

    return cluster;
};


function main() {
    let cluster_grid = populateCluster(10);


    console.log(cluster_grid);
}

main();