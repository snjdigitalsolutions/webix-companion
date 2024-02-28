import {Identifiable} from "../extendable/Identifiable.js"
/**
 * A class for a Webix <strong>Label</strong> component.
 * {@link https://docs.webix.com/desktop__label.html}
 * @extends Identifiable
 */
export class Label extends Identifiable {

    /**
     * Create a label
     * @param {number} id the label id
     * @param {string} label the text value of the label
     */
    constructor(id, label) {
        super(id);
        this.view = 'label';
        this.label = label;
    }

}