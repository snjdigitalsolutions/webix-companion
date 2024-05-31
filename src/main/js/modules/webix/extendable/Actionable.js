/**
 *
 */
export class Actionable {

    constructor() {
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

}