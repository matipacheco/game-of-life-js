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

function get_color(state) {
    return COLORS[state];
}

function change_cell_color(cell_grid, cell) {
    cell_grid.css("background-color", get_color(cell.state));
}

function populate_cluster() {
    let cell, cell_grid, cluster = [];

    for (let row_index = 0; row_index < cluster_dimension; row_index++) {
        let cluster_row = [];

        for (let col_index = 0; col_index < cluster_dimension; col_index++) {
            cell = new Cell();
            cluster_row.push(cell);

            cell_grid = $(row + row_index).filter(col + col_index);
            change_cell_color(cell_grid, cell);
        }

        cluster.push(cluster_row);
    }

    return cluster;
};

function to_intermediate_states(cluster_grid) {
    for (let row_index = 0; row_index < cluster_dimension; row_index++) {
        for (let col_index = 0; col_index < cluster_dimension; col_index++) {

            let cell = cluster_grid[row_index][col_index];
            let current_state = cell.state;
            cell.state = next_state(current_state);
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
 * CELL
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
    to_intermediate_states(cluster_grid);
    console.log(cluster_grid[0][0]);
}

main();