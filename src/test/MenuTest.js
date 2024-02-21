import assert from "node:assert";
import {Menu} from "../main/js/modules/webix/menu/Menu.js";
import {ViewOptions} from "../main/js/modules/webix/ViewOptions.js";
import {Menuitem} from "../main/js/modules/webix/menu/Menuitem.js";

describe('Test Group Name', function () {
    describe('#create', function () {
        it('Output a webix menu', function () {
            let menu = new Menu('test');
            menu.setWidth(900);
            menu.setLayout(ViewOptions.menuLayout().vertical);
            menu.setSubMenuPosition(ViewOptions.menuSubmenuPosition().bottom);
            menu.setType(true, 30);
            menu.addListener(ViewOptions.menuEvents().onItemClick, function(){
               console.log("test") ;
            });
            menu.addMenuItem(new Menuitem(1,"Option 1"));
            let option2 = new Menuitem(2,"Option 2");
            option2.addItem(new Menuitem(2.1, 'Sub-option 2.1'));
            option2.addItem(Menuitem.separator());
            option2.addItem(new Menuitem(2.2, 'Sub-option 2.2'));
            menu.addMenuItem(option2);

            console.log(menu);
        });
    });
});