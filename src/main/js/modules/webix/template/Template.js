import {Sizeable} from "../Sizeable.js";

export class Template extends Sizeable {

    constructor(id) {
        super();
        this.view = "template";
        if (id !== "undefined") {
            this.id = id;
        }
    }

    setHtml(htmlString){
        this.template = htmlString;
    }

    contentId(id){
        this.content = id;
    }

}