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
     * Set the URL in which data will be loaded from
     * @param {string} url the URL to load data
     */
    setDataUrl(url){
        this.url = url;
    }

}