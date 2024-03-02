export class Utility {

    constructor() {
    }

    /**
     * Creates a deep copy
     * @param {Object} objectToCopy
     * @returns {Object} the deep copy
     */
    static deepCopy(objectToCopy){
        return JSON.parse(JSON.stringify(objectToCopy));
    }

}