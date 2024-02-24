import {Sizeable} from "../Sizeable.js";

/**
 * Module for Webix label view
 * @extends Sizeable
 */
export class Label extends Sizeable {

    /**
     * Create a label
     * @param id the label id
     * @param label the text value of the label
     */
    constructor(id, label) {
        super();
        this.view = 'label';
        this.id = id;
        this.label = label;
    }

}