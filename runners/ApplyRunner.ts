import Runner from '../models/Runner';
import AllowedCommandTypes from '../config/AllowedCommandTypes';

class ApplyRunner extends Runner {
    
    /**
     * @method setAllowedCommandTypes
     * @description Set the allowed command types
     * @returns void
     */
    public setAllowedCommandTypes(): void 
    {
        this.allowedCommandTypes = AllowedCommandTypes['apply'];
    }
  
    /**
     * @method executeCommand
     * @description Execute the command
     * @returns void
     */
    public executeCommand() : void {
        switch (this.getCommandName()) {
            case 'workspace':
                this.applyWorkspace();
                break;
            default:
                console.log(`Invalid commandType passed on executeCommand(): ${this.getCommandName()}`);
                break;
        }
        
    }

    /**
     * @method applyWorkspace
     * @description Apply a new workspace
     * @returns void
     */
    private applyWorkspace() : void {
        console.log(`Apply a new workspace with the value: ${this.getCommandValue()}`);
    }
}

export default ApplyRunner;