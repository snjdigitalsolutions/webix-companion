import {Sizeable} from "../Sizeable.js";

/**
 * A class for a Webix <strong>Label</strong> component.
 * {@link https://docs.webix.com/desktop__label.html}
 * @extends Sizeable
 */
export class Label extends Sizeable {

    /**
     * Create a label
     * @param {number} id the label id
     * @param {string} label the text value of the label
     */
    constructor(id, label) {
        super();
        this.view = 'label';
        this.id = id;
        this.label = label;
    }

}