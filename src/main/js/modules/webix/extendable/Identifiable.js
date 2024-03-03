import {Styleable} from "./Styleable.js";

/**
 * Makes it possible to apply an ID to an object
 * during instantiation. This class should be
 * extended for use.
 * @extends Styleable
 */
export class Identifiable extends Styleable {

    /**
     * @param {string} id
     */
    constructor(id) {
        super();
        if (id !== undefined) {
            this.id = id;
        }
    }

    /**
     * Returns the Webix object that can be further
     * acted upon using component or control methods.
     */
    webix(){
        return $$(this.id);
    }

}