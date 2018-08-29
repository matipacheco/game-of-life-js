import {Cell} from "./cell.js";

function populateCluster() {
    let table = $(".cluster");

    for (let i = 0; i < 30; i++) {
        let row = $("<tr>");

        for (let i = 0; i < 50; i++) {
            const cell = new Cell();
            row.append($("<td>").text(cell.lifeState));
        }

        table.append(row);
    }
};

populateCluster();