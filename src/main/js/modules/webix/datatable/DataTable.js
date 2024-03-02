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

    disableSelection(){
        this.select = false;
    }

}