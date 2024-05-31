import {Identifiable} from "../extendable/Identifiable.js";

/**
 * A class for a Webix Button control. {@link https://docs.webix.com/api__refs__ui.button.html}
 * @extends Identifiable
 */
export class Button extends Identifiable {

    constructor(id) {
        super(id);
        this.view = 'button';
    }

    /**
     * Set a path for an image to be shown on the button
     * @param {string} filePath the path to the image file
     */
    setImagePath(filePath){
        this.type = 'image';
        this.image = filePath;
    }

    /**
     * Set a tool tip on the button. the tool tip is shown when hovering over the button.
     * @param {string} tip the tool tip to display
     */
    setToolTip(tip){
        this.tooltip = tip;
    }

    /**
     * The name of the icon to show in the button
     * @param {string} iconName name of the icon
     */
    setIcon(iconName){
        this.type = 'icon';
        this.icon = iconName;
    }

}