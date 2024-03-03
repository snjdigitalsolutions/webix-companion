import {Identifiable} from "../extendable/Identifiable.js";

/**
 * A class for the Webix <strong>Multiview</strong> container control.
 * @extends Identifiable
 */
export class MultiView extends Identifiable {

    constructor(id) {
        super(id);
        this.view = 'multiview';
    }

    /**
     * Disable default animate behavior
     */
    doNotAnimate(){
        this.animate = false;
    }

    /**
     * Add a view
     * @param {Identifiable} view an {@link Identifiable} view
     */
    addView(view){
        if (!this.hasOwnProperty('cells')){
            this.cells = [];
        }
        this.cells.push(view);
    }

    /**
     * The {@link Identifiable} to show in the multiview
     * @param {Identifiable} identifiable the Identifiable to show
     */
    setView(identifiable){
        this.webix().setValue(identifiable.id);
    }

}