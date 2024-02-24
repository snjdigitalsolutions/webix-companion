/**
 * A class for extendable height and width properties
 */
export class Sizeable {

    constructor() {
    }

    /**
     * Set the height of the view
     * @param height desired view height
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * Set the width of the view
     * @param width desired view width
     */
    setWidth(width) {
        this.width = width;
    }

    autowidth(){
        this.autowidth = true;
    }

    borderless(){
        this.borderless = true;
    }

}