import CreateRunner from "./runners/CreateRunner";
import ApplyRunner from "./runners/ApplyRunner";
import RemoveRunner from "./runners/RemoveRunner";
import RunnerConfig from "./types/RunnerConfig";

let args: Array<any> = process.argv.slice(2);
let commandType: string = args[0];
let commandName: string = args[1];
let commandValue: string  = args[2];
let commandWorskpace: string  = args[3];

const commandConfig: RunnerConfig = {
    commandType: commandType,
    commandName: commandName,
    commandValue: commandValue,
    commandWorkspace: commandWorskpace
};

switch (commandType) {
    case 'create':
        new CreateRunner(commandConfig).executeCommand();
        break;
    case 'apply':
        new ApplyRunner(commandConfig).executeCommand();
        break;
    case 'remove':
        new RemoveRunner(commandConfig).executeCommand();
        break;
    default:
        console.log(`Invalid commandType passed: ${commandType}`);
        break;
}