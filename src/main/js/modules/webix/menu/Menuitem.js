/**
 * A class supporting the Webix <strong>Menu</string> widget.
 * This class makes is possible to add menu items to a Menu
 * widget.
 * {@link https://docs.webix.com/desktop__menu.html}
 */
export class Menuitem {

    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    /**
     * Add a {@link Menuitem} to an existing {@link Menuitem}. This makes it
     * possible to nest menu items.
     * @param {Menuitem} menuitem
     */
    addItem(menuitem){
        if (this.hasOwnProperty('submenu'))
        {
            this.submenu.push(menuitem);
        } else {
            this.submenu = [];
            this.submenu.push(menuitem);
        }
    }

    /**
     * Disables the menu item.
     */
    disableMenuItem(){
        this.disabled = true;
    }

    /**
     * Add a separator line within a menu list.
     * @returns {{$template: string}}
     */
    static separator() {
        return {$template: "Separator"};
    }

    /**
     * Add a spacer within a menu list.
     * @returns {{$template: string}}
     */
    static spacer() {
        return {$template: "Spacer"};
    }

}