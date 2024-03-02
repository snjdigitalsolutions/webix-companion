/**
 *
 */
export class HeaderFilterTypes{

    /**
     * THe available filter types
     * @returns {Readonly<{textFilter: string, serverSelectFilter: string, serverFilter: string, selectFilter: string, numberFilter: string, dateFilter: string}>}
     */
    static type() {
        return Object.freeze({
            textFilter: 'textFilter',
            serverFilter: 'serverFilter',
            selectFilter: 'selectFilter',
            serverSelectFilter: 'serverSelectFilter',
            numberFilter: 'numberFilter',
            dateFilter: 'dateFilter'
        });
    }

}