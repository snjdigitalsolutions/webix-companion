export class BaseEvents {

    static events() {
        return Object.freeze({
            onChange: 'onChange',
            onItemClick: 'onItemClick',
            onAfterLoad: 'onAfterLoad',
            onTimedKeyPress: 'onTimedKeyPress'
        });
    }

}