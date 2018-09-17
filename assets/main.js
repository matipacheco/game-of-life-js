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
    return Math.floor(Math.random() * 2);
}

function getNextState(state) {
    return (state + 1) % 5;
}

function getColor(state) {
    return COLORS[state];
}

function getTerminalStates() {
    return [0, 1];
}

function getIntermediateStates() {
    return [2, 3];
}


function populateCluster() {
    const row = ".row_";
    const col = ".col_";

    for (let row_index = 1; row_index <= 5; row_index++) {
        for (let col_index = 1; col_index <= 5; col_index++) {
            let cell = new Cell();

            let cell_grid        = $(row + row_index).filter(col + col_index);
            let background_color = getColor(cell.lifeState);
            console.log(background_color );

            cell_grid.css("background-color", background_color);
        }

    }
};

populateCluster();