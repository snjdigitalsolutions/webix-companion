import {Identifiable} from "../extendable/Identifiable.js";

/**
 * Object representing the column of a {@link DataTable}
 * @extends Identifiable
 */
export class DataTableColumn extends Identifiable {

    constructor(id) {
        super(id);
    }

    /**
     * Set the column header with text
     * @param {string} headerText
     */
    basicHeader(headerText) {
        this.header = headerText;
    }

    /**
     * Set the column header with search filter
     * @param {string} headerText the header text value
     * @param {string} filter the filter type obtained from {@link HeaderFilterTypes.type}
     */
    advancedHeader(headerText, filter) {
        this.header = [];
        this.header.push(headerText);
        this.header.push(this.#createFilter(filter));
    }

    /**
     * Set the column header with search filter
     * @param {string} headerText the header text value
     * @param {string} filter the filter type obtained from {@link HeaderFilterTypes.type}
     * @param {string} placeholder the placeholder text for the filter.
     */
    advancedHeaderWithPlaceholder(headerText, filter, placeholder) {
        this.header = [];
        this.header.push(headerText);
        this.header.push(this.#createFilter(filter, placeholder));
    }

    /**
     * Create the object needed for advanced filters with properties
     * content and placeholder if defined.
     * header: ["Manufacturer or PMF", {content: "textFilter", placeholder: "Manufacturer or PMF Filter"}]
     * @param {string} filter the filter type obtained from {@link HeaderFilterTypes.type}
     * @param {string} placeholder the placeholder text for the filter
     */
    #createFilter(filter, placeholder) {
        let filterObject = {};
        filterObject.content = filter;
        if (placeholder !== undefined) {
            filterObject.placeholder = placeholder;
        }
        return filterObject;
    }

}