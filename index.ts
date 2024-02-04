import CreateRunner from "./runners/CreateRunner";
import ApplyRunner from "./runners/ApplyRunner";
import RemoveRunner from "./runners/RemoveRunner";

let args: Array<any> = process.argv.slice(2);
let commandType: string = args[0];
let commandName: string = args[1];
let commandValue: string  = args[2];


switch (commandType) {
    case 'create':
        new CreateRunner(commandType, commandName, commandValue).executeCommand();
        break;
    case 'apply':
        new ApplyRunner(commandType, commandName, commandValue).executeCommand();
        break;
    case 'remove':
        new RemoveRunner(commandType, commandName, commandValue).executeCommand();
        break;
    default:
        console.log(`Invalid commandType passed: ${commandType}`);
        break;
}