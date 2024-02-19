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