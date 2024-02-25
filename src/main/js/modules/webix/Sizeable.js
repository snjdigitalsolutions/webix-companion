/**
 * A class for defining height and width properties.
 * This class should be extended for use.
 */
export class Sizeable {

    constructor() {
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

    /**
     * Enable borderless for a view. When calling this method,
     * the object has the property <strong>borderless</strong> added and set true
     */
    borderless(){
        this.borderless = true;
    }

}