import {Identifiable} from "../extendable/Identifiable.js";
import {Utility} from "../utility/Utility.js";

/**
 * A class for the Webix <strong>Layout</strong> widget. When
 * referencing a grid of rows and columns the row is always
 * indexed and created first.
 * {@link https://docs.webix.com/desktop__components.html}
 * @extends Identifiable
 */
export class Layout extends Identifiable {

    /**
     * @param {string=} id
     */
    constructor(id) {
        super(id);
    }

    /**
     * Add a number of rows to an object
     * @param {number} numRows the number of rows
     * @returns {Layout}
     */
    addRows(numRows) {
        if (!this.hasOwnProperty('rows')) {
            this.rows = [];
        }
        for (let i = 0; i < numRows; i++) {
            this.rows.push(new Layout());
        }
        return this;
    }

    /**
     * Add empty rows to a specified column
     * @param {number} numRows the number of rows to add
     * @param {number} columnIndex the column index
     */
    addRowsToColumn(numRows, columnIndex) {
        if (!this.hasOwnProperty("cols")) {
            throw Error("No defined columns");
        }
        let column = this.cols[columnIndex];
        column.rows = [];
        for (let i = 0; i < numRows; i++) {
            column.rows.push(new Layout());
        }
    }

    /**
     * Add a number of columns to an object
     * @param {number} numColumns the number of columns
     * @returns {Layout}
     */
    addColumns(numColumns) {
        if (!this.hasOwnProperty('cols')) {
            this.cols = [];
        }
        for (let i = 0; i < numColumns; i++) {
            this.cols.push(new Layout());
        }
        return this;
    }

    /**
     * A columns to a row
     * @param {number} numCols the number of columns to add
     * @param {number} rowIndex the index of the rows to add columns to
     */
    addColumnsToRow(numCols, rowIndex) {
        if (!this.hasOwnProperty("rows")) {
            throw Error("No defined rows");
        }
        let row = this.rows[rowIndex];
        row.cols = [];
        for (let i = 0; i < numCols; i++) {
            row.cols.push(new Layout());
        }
    }

    /**
     * Create a layout and add rows and columns for a specified
     * grid size. For example, to create a 3x2 layout (3 rows by 2 columns)
     * call the method createGridLayout(object,3,2). This function
     * creates a layout where columns are nested inside each row.
     * @param {number} rows the row count
     * @param {number} cols the column count
     * @throws {Error} when rows or columns are already defined in the Layout
     */
    createGridLayout(rows, cols) {
        if (this.hasOwnProperty("rows") || this.hasOwnProperty("cols")) {
            throw new Error("Rows and columns already defined for layout.");
        }
        this.rows = [];
        for (let i = 0; i < rows; i++) {
            this.rows[i] = (new Layout()).addColumns(cols);
        }
        return this;
    }

    /**
     * Set an object at a specified index. Since a layout object
     * represent a row or column, a check is made for that property
     * and then the indexed object is returned.
     * @param {object} object the object to insert
     * @param {number} index the index to insert into
     * @throws {Error} exception is thrown if the Layout
     * has no rows or columns defined
     */
    setObjectAtIndex(object, index) {
        if (this.hasOwnProperty('rows')) {
            this.rows.splice(index, 1, object);
        } else if (this.hasOwnProperty('cols')) {
            this.cols.splice(index, 1, object);
        } else {
            throw new Error("The layout does not have a defined row or column.");
        }
    }

    /**
     * Set an object at a row index.
     * @param {Object} object the object being set to the row
     * @param {number} rowIndex the index of the row
     */
    setObjectAtRow(object, rowIndex) {
        if (this.hasOwnProperty("rows")) {
            this.rows[rowIndex] = object;
        } else {
            throw Error("Layout has no defined rows.");
        }
    }

    /**
     * Set an object at a column index.
     * @param {Object} object the object being set to the column
     * @param {number} colIndex the index of the column
     */
    setObjectAtColumn(object, colIndex) {
        if (this.hasOwnProperty("cols")) {
            this.cols[colIndex] = object;
        } else {
            throw Error("Layout has no defined columns.");
        }
    }

    /**
     * Set an object at a specific row and column of a layout.
     * @param {number} rowIndex the row index
     * @param {number} colIndex the column index
     * @param {Object} object the object being set to the (row,column)
     */
    setObjectAtRowAndColumn(rowIndex, colIndex, object) {
        if (this.hasOwnProperty('rows')) {
            let row = this.rows[rowIndex];
            if (row.hasOwnProperty("cols")) {
                row.cols[colIndex] = object;
            } else {
                throw new Error('The row does not have columns defined.');
            }
        } else {
            throw new Error('The layout does not have root rows defined.');
        }
    }


}