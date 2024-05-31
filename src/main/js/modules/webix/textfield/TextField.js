import {Identifiable} from "../extendable/Identifiable.js";

export class TextField extends Identifiable {

    /**
     * @param {string} id the text field ID
     */
    constructor(id) {
        super(id);
        this.view = 'text';
    }

    /**
     * Set the text field's label
     * @param {string} label the label text
     */
    setLabel(label) {
        this.label = label;
    }

    /**
     * Set the label width
     * @param {number} labelWidth the width of the label.
     * If the component has an assigned width, the text
     * field size will be equal to the width minus
     * the labelWidth
     */
    setLabelWidth(labelWidth) {
        this.labelWidth = labelWidth;
    }

    /**
     * The name value for the text field
     * @param {string} name the name for the field
     */
    setName(name) {
        this.name = name;
    }

    /**
     * The amount of padding below the text field. This is
     * necessary when creating an invalid message
     * @param {number} padding the spacing below the field
     */
    setBottomPadding(padding){
        this.bottomPadding = padding;
    }

    /**
     * The invalid message for a text field. This message
     * is shown under the field when it is validated at
     * the validation fails.
     * @param {string} message the message shown
     */
    setInvalidMessage(message){
        this.invalidMessage = message;
    }

    /**
     * Convinince to set both the invalid method
     * and bottom padding in one call.
     * @param {string} message the message shown
     * @param {number} padding the spacing below the field
     */
    setInvalidMessageAndPadding(message, padding){
        this.setInvalidMessage(message);
        this.setBottomPadding(padding);
    }

    /**
     * Setting required true will cause the red asterisk to show
     * @param {boolean} value set true to make required
     */
    setRequired(value){
        this.required = value;
    }

    /**
     * Set the textfield placeholder
     * @param {string} placeholder
     */
    setPlaceHolder(placeholder) {
        this.placeholder = placeholder;
    }


}