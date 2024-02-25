import {Sizeable} from "../Sizeable.js";

/**
 * A class for the Webix <strong>Layout</strong> widget
 * {@link https://docs.webix.com/desktop__components.html}
 * @extends Sizeable
 */
export class Layout extends Sizeable {

    constructor() {
        super();
    }

    /**
     * Add a number of rows to an object
     * @param {object} object the object in which rows will be added
     * @param {number} numRows the number of rows
     */
    addRows(object, numRows) {
        object.rows = [];
        for (let i = 0; i < numRows; i++) {
            object.rows.push({});
        }
    }

    /**
     * Add a number of columns to an object
     * @param {object} object the object in which columns will be added
     * @param {number} numColumns the number of columns
     */
    addColumns(object, numColumns) {
        object.cols = [];
        for (let i = 0; i < numColumns; i++){
            object.cols.push({});
        }
    }

}