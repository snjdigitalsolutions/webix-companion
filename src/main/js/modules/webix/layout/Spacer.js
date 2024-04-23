/**
 * A class used to create a spacer which can be inserted
 * into a row or column. Rows have spacers with height
 * attribute and column has a spacer with width attribute
 */
export class Spacer {

    /**
     * @param {number} spacerValue a numeric value for the spacer
     */
    constructor(spacerValue) {
        this.spacerValue = spacerValue;
    }

    /**
     * Get a horizontal spacer
     * @returns {{width: number}}
     */
    horizontalSpacer() {
        return {width: this.spacerValue}
    }

    /**
     * Get a vertical spacer
     * @returns {{height: number}}
     */
    verticalSpacer() {
        return {height: this.spacerValue}
    }

}