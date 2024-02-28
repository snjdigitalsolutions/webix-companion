import {Identifiable} from "./extendable/Identifiable.js";

/**
 * A base class for pages which consists of a single row
 * containing three columns. The left and right columns are 10
 * pixels wide and the center column will fill the remaining
 * space.
 */
export class Basepage extends Identifiable {

    constructor(id, containerName, baseContent) {
        super(id);
        this.containerName = containerName;
        this.baseContent = baseContent;
    }

    build() {
        return {
            container: this.containerName,
            id: this.id,
            rows: [
                {
                    cols: [
                        {width:10},
                        this.baseContent,
                        {width:10}
                    ]
                }
            ]
        }
    }

}