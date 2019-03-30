/*******************************************************************************
* UTILS
*******************************************************************************/

const cluster_dimension = 10, row = ".row_", col = ".col_";

const COLORS = {
    0 : "black", // 0 : dead
    1 : "black", // 1 : about to live
    2 : "white", // 2 : alive
    3 : "white"  // 3 : about to die
};


/**
 * Method that return a cell's color depending on it's state
 * @param state
 * @returns {*}
 */
function get_color(state) {
    return COLORS[state];
}


function get_cell_grid(row_index, col_index){
    return $(row + row_index).filter(col + col_index);
}


/**
 * Method that changes a cell's color
 * @param cell_grid
 * @param cell
 */
function change_cell_color(cell_grid, cell) {
    cell_grid.css("background-color", get_color(cell.state));
}


/**
 * Initial setup method. It creates a random cell cluster
 * @returns {Array}
 */
function populate_cluster() {
    let cell, cell_grid, cluster = [];

    for (let row_index = 0; row_index < cluster_dimension; row_index++) {
        let cluster_row = [];

        for (let col_index = 0; col_index < cluster_dimension; col_index++) {
            cell = new Cell();
            cluster_row.push(cell);

            cell_grid = get_cell_grid(row_index, col_index);
            change_cell_color(cell_grid, cell);
        }

        cluster.push(cluster_row);
    }

    return cluster;
};


/**
 * Method that counts the number of alive neighbor cells of a particular cell
 * @param cluster_grid
 * @param row_index
 * @param col_index
 * @returns {number}
 */
function count_alive_neighbors(cluster_grid, row_index, col_index) {
    let alive_neighbors = 0;

    for (let i = row_index - 1; i <= (row_index + 1); i++) {
        for (let j = col_index - 1; j <= (col_index + 1); j++) {

            if (i == row_index && j == col_index) { continue; }

            try {
                let cell = cluster_grid[i][j];

                if (cell == null) { continue; }

                if (cell.is_alive) { alive_neighbors++; }
            }
            catch (e) { continue; }
        }
    }

    return alive_neighbors;
};


/**
 * Method that holds the basic logic of the game
 * @param cluster_grid
 */
function game_of_life(cluster_grid) {
    for (let i = 0; i < cluster_dimension; i++) {
        for (let j = 0; j < cluster_dimension; j++) {

            let cell = cluster_grid[i][j];
            let alive_neighbors = count_alive_neighbors(cluster_grid, i, j);

            if (cell.is_alive) {
                if ((alive_neighbors <= 1) || (alive_neighbors >= 4)) {
                    cell.state = next_state(cell.state);
                }
            }
            else {
                if (alive_neighbors == 3) {
                    cell.state = next_state(cell.state);
                }
            }
        }
    }
}


/**
 * Method that changes the state of the cells whose state it's an intermediate state
 * @param cluster_grid
 */
function terminate_intermediate_cells(cluster_grid) {
    for (let row_index = 0; row_index < cluster_dimension; row_index++) {
        for (let col_index = 0; col_index < cluster_dimension; col_index) {

            let cell = cluster_grid[row_index][col_index];

            if (intermediate_states().includes(cell.state)){
                cell.state = next_state(cell.state);
                change_cell_color(get_cell_grid(row_index, col_index), cell);
            }
        }
    }
}



/*******************************************************************************
 * CELL
 *******************************************************************************/

class Cell {
    constructor() {
        this._state = get_random_terminal_states();
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get is_alive() {
        return alive_states().includes(this._state);
    }

    get is_dead() {
        return dead_states().includes(this._state);
    }
}



/*******************************************************************************
 * STATES MANAGER
 *******************************************************************************/

function get_random_terminal_states() {
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



/*******************************************************************************
 * MAIN
 *******************************************************************************/

function main() {
    let cluster_grid = populate_cluster();

/*    while (true) {
        game_of_life(cluster_grid)
        setTimeout(terminate_intermediate_cells(cluster_grid), 1000);
    }*/
}

main();