import AllowedCommandTypes from "../types/AllowedCommandTypes";

/**
 * allowedCommandTypes
 * @description allowedCommandTypes is a model that contains the allowed command types for create, apply and remove commands.
 * @property allowedCreateCommandTypes - An array of allowed create command types
 * @property allowedApplyCommandTypes - An array of allowed apply command types
 * @property allowedRemoveCommandTypes - An array of allowed remove command types
 */
const allowedCommandTypes: AllowedCommandTypes = {
    create: {
        names: ['workspace', 'migration'],
        conditions: []
    },
    apply: {
        names: ['workspace', 'migration'],
        conditions: []
    },
    remove: {
        names: ['workspace', 'migration'],
        conditions: []
    }
};

export default allowedCommandTypes;