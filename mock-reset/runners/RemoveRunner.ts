import Runner from '../models/Runner';
import AllowedCommandTypes from '../config/AllowedCommandTypes';

class RemoveRunner extends Runner {

    /**
     * @method setAllowedCommandTypes
     * @description Set the allowed command types
     * @returns void
     */
    public setAllowedCommandTypes(): void 
    {
        this.allowedCommandTypes = this.allowedCommandTypes['remove'];
    }
  
    /**
     * @method executeCommand
     * @description Execute the command
     * @returns void
     */
    public executeCommand() : void {
        switch (this.getCommandName()) {
            case 'workspace':
                this.removeWorkspace();
                break;
            default:
                console.log(`Invalid commandType passed on executeCommand(): ${this.getCommandName()}`);
                break;
        }
        
    }

    /**
     * @method removeWorkspace
     * @description Apply a new workspace
     * @returns void
     */
    private removeWorkspace() : void {
        console.log(`Removing a new workspace with the value: ${this.getCommandValue()}`);
    }
}

export default RemoveRunner;