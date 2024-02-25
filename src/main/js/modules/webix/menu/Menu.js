import {Sizeable} from "../Sizeable.js";

/**
 * A class for the Webix <strong>Menu</string> widget.
 * {@link https://docs.webix.com/desktop__menu.html}
 * @extends Sizeable
 */
export class Menu extends Sizeable {

    constructor(id) {
        super();
        this.view = 'menu';
        this.id = id;
    }

    setWidth(width){
        this.width = width
    }

    /**
     * Sets position of pull-down sub-menus that will appear on mouse over
     * @param position the position based on {@link ViewOptions}
     *
     */
    setSubMenuPosition(position) {
        this.subMenuPos = position;
    }

    /**
     * Sets an object that contains setting for menu items
     * @param subsign sets an arrow for an item containing a submenu
     * @param height optional height
     * @param width optional width
     *
     * {@link https://docs.webix.com/desktop__menu.html}
     */
    setType(subsign, height, width) {
        if (typeof subsign !== "undefined") {
            this.type = {};
            this.type.subsign = subsign;
        }

        if (typeof height !== "undefined") {
            this.type.height = height;
        }

        if (typeof width !== "undefined") {
            this.type.width = width;
        }
    }

    /**
     * Set the layout to be either horizontal or vertical
     * @param layout
     */
    setLayout(layout) {
        this.layout = layout;
    }

    /**
     * Add a listener to the view. The event is a string property
     * @param event
     * @param method
     */
    addListener(event, method) {
        if (this.hasOwnProperty('on')) {
            this.on[event] = method;
        } else {
            this.on = {};
            this.on[event] = method;
        }
    }

    addMenuItem(item) {
        if (!this.hasOwnProperty('data')) {
            this.data = [];
        }
        this.data.push(item);
    }

    autowidth(){
        this.autowidth = true;
    }

}