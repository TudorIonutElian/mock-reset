
/**
 * AllowedCommandTypes
 * @description AllowedCommandTypes is a model that contains the allowed command types for create, apply and remove commands.
 * @property create - An array of allowed create command types
 * @property apply - An array of allowed apply command types
 * @property remove - An array of allowed remove command types
 */
type AllowedCommandTypes = Object & {
    create: Object & {
        names: Array<string>,
        conditions: Array<string>
    },
    apply: Object & {
        names: Array<string>,
        conditions: Array<string>
    },
    remove: Object & {
        names: Array<string>,
        conditions: Array<string>
    },
}

export default AllowedCommandTypes;