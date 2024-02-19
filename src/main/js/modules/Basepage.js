/**
 * A base class for Webix pages which consists of a single row
 * containing three columns. The left and right columns are 10
 * pixels wide and the center column will fill the remaining
 * space
 */
export class Basepage {

    constructor(containerName, id, baseContent) {
        this.containerName = containerName;
        this.id = id;
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