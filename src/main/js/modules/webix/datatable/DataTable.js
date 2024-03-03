import {Identifiable} from "../extendable/Identifiable.js";

/**
 * A class for a Webix <strong>DataTable</strong> component.
 * {@link https://docs.webix.com/datatable__index.html}
 * @extends Identifiable
 */
export class DataTable extends Identifiable{

    constructor(id) {
        super(id);
        this.view = 'datatable';
    }

    resizeRows(){
        this.resizeRow = true;
    }

    /**
     *
     * @param {boolean} value
     */
    setFixedRowHeight(value){
        this.fixedRowHeight = value;
    }

    /**
     * Prevent selections from being made in
     * the table. This is the default behavior
     */
    disableSelection(){
        this.select = false;
    }

    /**
     * Set the selection type possible for the datatable.
     * (e.g. row, cell, column)
     * {@link ViewOptions.datatableSelect}
     * @param {string} type the type of selection possible
     */
    setSelectionType(type){
        this.select = type;
    }

    /**
     * Set the URL in which data will be loaded from
     * @param {string} url the URL to load data
     */
    setDataUrl(url){
        this.url = url;
    }

    /**
     * Add a column to the data table
     * @param {DataTableColumn} column the table column
     */
    addColumn(column){
        if (!this.hasOwnProperty('columns')){
            this.columns = [];
        }
        this.columns.push(column);
    }

}