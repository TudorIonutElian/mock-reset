let arguments: Array<any> = process.argv.slice(2);
let commandType: string = arguments[0];
let commandName: string = arguments[1];
let commandValue: string  = arguments[3];


switch (commandType) {
    case 'create':
        break;
    case 'apply':
        break;
    case 'remove':
        break;
    default:
        console.log(`Invalid commandType passed: ${commandType}`);
        break;
}