var arguments = process.argv.slice(2);
var commandType = arguments[0];
var commandName = arguments[1];
var commandValue = arguments[3];
switch (commandType) {
    case 'create':
        break;
    case 'apply':
        break;
    case 'remove':
        break;
    default:
        console.log("Invalid commandType passed: ".concat(commandType));
        break;
}
//# sourceMappingURL=index.js.map