import {Identifiable} from "../extendable/Identifiable.js";
import {WindowPosition} from "../enum/WindowPosition.js";

export class Window extends Identifiable {

    /**
     * @param {string} id the Window id
     */
    constructor(id) {
        super(id);
        this.view = 'window';
    }

    /**
     * The header displayed on the window
     * @param {string} header header text
     */
    setHeader(header){
        this.head = header;
    }

    setModal() {
        this.modal = true;
    }

    /**
     * Set the position of the window. Options
     * are top or center
     * @param {WindowPosition} position the window position
     */
    setPosition(position)
    {
        this.position = position;
    }

}