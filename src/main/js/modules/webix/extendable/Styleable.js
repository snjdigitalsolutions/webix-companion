import {Actionalble} from "./Actionalble.js";

/**
 * A class for defining height and width properties.
 * This class should be extended for use.
 * @extends Actionalble
 */
export class Styleable extends Actionalble {

    constructor() {
        super();
    }

    /**
     * Set the height of the view
     * @param {number} height desired view height in pixels
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * Set the width of the view
     * @param {number} width desired view width in pixels
     */
    setWidth(width) {
        this.width = width;
    }

    /**
     * Enable autowidth for a view. When calling this method,
     * the object has the property <strong>autowidth</strong> added and set true
     */
    autowidth(){
        this.autowidth = true;
    }

    autoheight(){
        this.autoheight = true;
    }

    /**
     * Enable borderless for a view. When calling this method,
     * the object has the property <strong>borderless</strong> added and set true
     */
    borderless(){
        this.borderless = true;
    }

    /**
     * Disables the view.When calling this method,
     * the object has the property <strong>disabled</strong> added and set true
     */
    disabled(){
        this.disabled = true;
    }

    /**
     * For a table column, have the column take up all available space
     */
    fillSpace(){
        this.fillspace = true;
    }

}