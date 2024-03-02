import {Styleable} from "../extendable/Styleable.js";
import {Identifiable} from "../extendable/Identifiable.js";

/**
 * A class for a Webix <strong>Template</strong> widget.
 * {@link https://docs.webix.com/desktop__template.html}
 * @extends Styleable
 */
export class Template extends Identifiable {

    /**
     * Instantiate a template with given id.
     * @param {string} id the id for the template
     */
    constructor(id) {
        super(id);
        this.view = "template";
    }

    /**
     * Set the HTML value of the template
     * @param {string} htmlString
     */
    setHtml(htmlString){
        this.template = htmlString;
    }

    /**
     * The id of HTML content (e.g. <div>) to place in the template
     * @param {string} id the id of the HTML content
     */
    contentId(id){
        this.content = id;
    }

}