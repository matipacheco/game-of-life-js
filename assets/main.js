/*
* NOTA PARA EL FUTURO
*
* import {getRandomTerminalStates} from "./life_state_manager.js";
* export function getRandomTerminalStates()....
*
* */

const dimension = 10;

const COLORS = {
    0 : "black", // 0 : dead
    1 : "black", // 1 : about to live
    2 : "white", // 2 : alive
    3 : "white"  // 3 : about to die
};

function getColor(state) {
    return COLORS[state];
}



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

function nextState(state) {
    return (state + 1) % 4;
}

function aliveStates() {
    return [2, 3];
}

function deadStates() {
    return [0, 1];
}

function getTerminalStates() {
    return [0, 2];
}

function getIntermediateStates() {
    return [1, 3];
}

function cellIsAlive(cell) {
    return aliveStates().includes(cell.lifeState);
}

function cellIsDead(cell) {
    return deadStates().includes(cell.lifeState);
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
    let cluster_grid = populateCluster(dimension);

    console.log(cluster_grid);
}

main();