import Runner from '../models/Runner';

class CreateRunner extends Runner {
  
    /**
     * @method executeCommand
     * @description Execute the command
     * @returns void
     */
    public executeCommand() : void {
        switch (this.getCommandName()) {
            case 'environment':
                this.createEnvironment();
                break;
            default:
                console.log(`Invalid commandType passed on executeCommand(): ${this.getCommandName()}`);
                break;
        }
        
    }

    /**
     * @method createEnvironment
     * @description Create a new environment
     * @returns void
     */
    private createEnvironment() : void {
        console.log(`Creating a new environment with the value: ${this.getCommandValue()}`);
    }
}


export default CreateRunner;