export default class countActions {
    static INCREAMENT = 'INCREAMENT';
    static RESET = 'RESET';

    static increament = () => ({
        type: countActions.INCREAMENT
    })

    static reset = () => ({
        type: countActions.RESET
    })
}