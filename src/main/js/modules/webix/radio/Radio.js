import {Identifiable} from "../extendable/Identifiable.js";
import {RadioItem} from "./RadioItem.js";
/**
 * A class for Webix <strong>Radio</string> control.
 * {@link https://docs.webix.com/desktop__radio.html}
 * @extends Identifiable
 */
export class Radio extends Identifiable {

    /**
     * @param {string} id the Radio id
     */
    constructor(id) {
        super(id);
    }

    /**
     * Set the initial selection value for the Radio
     * @param {number} initialValue
     */
    setInitialValue(initialValue){
        this.value = initialValue;
    }

    /**
     * Add a {@link RadioItem} to the Radio
     * @param {RadioItem} radioItem
     */
    addItem(radioItem){
        if (!this.hasOwnProperty('options')){
            this.options = [];
        }
        this.options.push(radioItem);
    }

}