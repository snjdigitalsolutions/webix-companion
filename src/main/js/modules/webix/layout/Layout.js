import {Sizeable} from "../Sizeable.js";

export class Layout extends Sizeable {

    constructor() {
        super();
    }

    addRows(object, numRows) {
        object.rows = [];
        for (let i = 0; i < numRows; i++) {
            object.rows.push({});
        }
    }

    addColumns(object, numColumns) {
        object.cols = [];
        for (let i = 0; i < numColumns; i++){
            object.cols.push({});
        }
    }

}