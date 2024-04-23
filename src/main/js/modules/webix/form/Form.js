import {Identifiable} from "../extendable/Identifiable.js";

export class Form extends Identifiable {

    constructor(id) {
        super(id);
        this.view = 'form';
    }

    addElement(element) {

    }

}