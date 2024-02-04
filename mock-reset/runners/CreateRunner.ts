import Runner from '../models/Runner';
import AllowedCommandTypes from '../config/AllowedCommandTypes';
import Workspace from '../models/Workspace';

class CreateRunner extends Runner {

    /**
     * @method setAllowedCommandTypes
     * @description Set the allowed command types
     * @returns void
     */
    public setAllowedCommandTypes(): void 
    {
        this.allowedCommandTypes = AllowedCommandTypes['create'];
    }
  
    /**
     * @method executeCommand
     * @description Execute the command
     * @returns void
     */
    public executeCommand() : void {
        if (this.isValidCommandName()) {
            if (this.isValidCommandValue()) {
                switch (this.getCommandName()) {
                    case 'workspace':
                        this.createWorkspace();
                        break;
                    default:
                        break;
                }
            } else {
                console.log(JSON.stringify(
                    {
                        className: this.constructor.name,
                        methodName: 'executeCommand',
                        commandName: this.getCommandName(),
                        commandValue: this.getCommandValue() || '',
                        error: 'Invalid command value'
                    }
                ));
            }
        } else {
            console.log(`Invalid commandName passed on executeCommand(): ${this.getCommandName()}`);
        }
    }

    /**
     * @method createWorkspace
     * @description Create a new workspace
     * @returns void
     */
    private createWorkspace() : void {
        // Usage example
        const workspace = new Workspace(
            this.getCommandValue()
        );
        workspace.connect()
            .then(() => workspace.createDatabase())
            .then(() => {
                workspace.createMigrationsTable();
                console.log('Database created successfully!');
                return workspace.disconnect();
            })
            .catch((error) => {
                console.error('Error:', error);
                workspace.disconnect();
            });
    }
}


export default CreateRunner;