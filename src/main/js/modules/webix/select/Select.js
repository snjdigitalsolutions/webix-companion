import {Identifiable} from "../extendable/Identifiable.js";

export class Select extends Identifiable {

    /**
     * @param {string} id the id for the Select control
     */
    constructor(id) {
        super(id);
        this.view = 'select';
    }

    /**
     * Set the label for the Select control
     * @param {string} label the label text
     */
    setLabel(label){
        this.label = label;
    }

    /**
     * Set the label text and label width
     * @param {string} label the label text
     * @param {number} width the label width
     */
    setLabelAndLabelWidth(label, width){
        this.label = label;
        this.labelWidth = width;
    }

    /**
     * Set the initially selected option
     * @param {number} id the id of the Select option
     */
    setInitialOptionSelection(id){
        this.value = id;
    }

    /**
     * Set the options for the Select control
     * @param {SelectOption[]} optionArray an array of options for the control
     */
    setOptions(optionArray){
        this.options = optionArray;
    }

    /**
     * Add an {@link SelectOption} to the Selection control
     * @param {SelectOption} selectOption the selection option
     */
    addOption(selectOption){
        if (!this.hasOwnProperty('options')){
            this.options = [];
        }
        this.options.push(selectOption);
    }

}