import {Basepage} from "../../js/modules/Basepage.js";
import {Menu} from "../../js/modules/menu/Menu.js";
import {ViewOptions} from "../../js/modules/ViewOptions.js";
import {Menuitem} from "../../js/modules/menu/Menuitem.js";

// Create menu options
let option1 = new Menuitem(1, "Option 1")
let option2 = new Menuitem(2, "Option 2");
option2.addItem(new Menuitem(2.1, 'Sub-option 2.1'));
option2.addItem(Menuitem.separator());
option2.addItem(new Menuitem(2.2, 'Sub-option 2.2'));

// Create horizontal menu (default)
let horizontalMenu = new Menu('horizontal');
horizontalMenu.setWidth(900);
horizontalMenu.setSubMenuPosition(ViewOptions.menuSubmenuPosition().bottom);
horizontalMenu.setType(true, 30);
horizontalMenu.addListener(ViewOptions.menuEvents().onItemClick, function () {
    webix.alert("Horizontal menu clicked");
});
horizontalMenu.addMenuItem(option1);
horizontalMenu.addMenuItem(option2);

// Create vertical menu with same options
let verticalMenu = new Menu('vertical');
verticalMenu.setWidth(100);
verticalMenu.setHeight(300);
verticalMenu.setSubMenuPosition(ViewOptions.menuSubmenuPosition().bottom);
verticalMenu.setType(true, 30);
verticalMenu.setLayout(ViewOptions.menuLayout().vertical);
verticalMenu.addListener(ViewOptions.menuEvents().onItemClick, function () {
    webix.alert("Vertical menu clicked");
});
verticalMenu.addMenuItem(option1);
verticalMenu.addMenuItem(option2);


webix.ready(function () {
    let basePage = new Basepage(
        "pagecontainer",
        "menudemo",
        {
            rows: [
                {
                    cols:[
                        horizontalMenu,
                        {}
                    ]
                },
                {height: 50},
                {
                    cols:[
                        verticalMenu,
                        {}
                    ]
                }
            ]
        }
    );
    webix.ui(
        basePage.build()
    );
})