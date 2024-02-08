import Runner from '../models/Runner';
import AllowedCommandTypes from '../config/AllowedCommandTypes';
import Workspace from '../models/Workspace';

class RemoveRunner extends Runner {

    /**
     * @method setAllowedCommandTypes
     * @description Set the allowed command types
     * @returns void
     */
    public setAllowedCommandTypes(): void 
    {
        this.allowedCommandTypes = AllowedCommandTypes['remove'];
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
        const workspaceName = this.getCommandValue();

        if (workspaceName) {
            const workspace = new Workspace(
                this.getCommandValue()
            );
            workspace.removeWorkspace(this.getCommandValue());
            workspace.disconnect();
            workspace.remove(this.getCommandValue());
        } else {
            console.log(`Invalid workspace name: ${workspaceName}`);
        }
        
    }
}

export default RemoveRunner;