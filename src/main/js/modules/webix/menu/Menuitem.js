/**
 * A menu item which 
 */
export class Menuitem {

    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    addItem(menuitem){
        if (this.hasOwnProperty('submenu'))
        {
            this.submenu.push(menuitem);
        } else {
            this.submenu = [];
            this.submenu.push(menuitem);
        }
    }

    disableMenuItem(){
        this.disabled = true;
    }

    static separator() {
        return {$template: "Separator"};
    }

    static spacer() {
        return {$template: "Spacer"};
    }

}