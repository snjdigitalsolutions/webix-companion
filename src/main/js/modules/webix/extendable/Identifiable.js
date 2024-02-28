import {Sizeable} from "./Sizeable.js";

/**
 * Makes it possible to apply an ID to an object
 * during instantiation. This class should be
 * extended for use.
 * @extends Sizeable
 */
export class Identifiable extends Sizeable {

    /**
     * @param {string} id
     */
    constructor(id) {
        super();
        if (id !== "undefined") {
            this.id = id;
        }
    }

    /**
     * Add a listener to the view. The event is a string property
     * @param {string} event use {@Link BaseEvents} or one of its children
     * for easy lookup of event names
     * @param {method} method the function called in response to the event
     */
    addListener(event, method) {
        if (this.hasOwnProperty('on')) {
            this.on[event] = method;
        } else {
            this.on = {};
            this.on[event] = method;
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