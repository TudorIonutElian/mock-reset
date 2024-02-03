import Runner from '../models/Runner';

class ApplyRunner extends Runner {
  
    /**
     * @method executeCommand
     * @description Execute the command
     * @returns void
     */
    public executeCommand() : void {
        switch (this.getCommandName()) {
            case 'environment':
                this.applyEnvironment();
                break;
            default:
                console.log(`Invalid commandType passed on executeCommand(): ${this.getCommandName()}`);
                break;
        }
        
    }

    /**
     * @method applyEnvironment
     * @description Apply a new environment
     * @returns void
     */
    private applyEnvironment() : void {
        console.log(`Apply a new environment with the value: ${this.getCommandValue()}`);
    }
}

export default ApplyRunner;