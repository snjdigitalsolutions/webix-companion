/**
 * Options for views which are categorized by view type.
 */
export class ViewOptions {

    /**
     * Available values for the {@link Menu} sub-menu positions
     * @returns {Readonly<{top: string, left: string, bottom: string, right: string}>}
     */
    static menuSubmenuPosition() {
        return Object.freeze({
            top: 'top',
            bottom: 'bottom',
            left: 'left',
            right: 'right'
        });
    }

    /**
     * Available Menu view events
     * @returns {Readonly<{onItemClick: string}>}
     */
    static menuEvents() {
        return Object.freeze({
            onItemClick: 'onItemClick'
        });
    }

    static menuLayout() {
        return Object.freeze({
            horizontal: 'x',
            vertical: 'y'
        });
    }

    static datatableSelect(){
        return Object.freeze({
            cell: 'cell',
            row: 'row',
            column: 'column'
        });
    }

}