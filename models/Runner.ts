import RunnerConfig from "../types/RunnerConfig";

abstract class Runner {
    private commandType: string;
    private commandName: string;
    private commandValue: string;
    private commandWorkspace: string;
    protected allowedCommandTypes: Object;

    public constructor(config: RunnerConfig) 
    {
        this.setCommandType(config);
        this.setCommandName(config);
        this.setComandValue(config);
        this.setAllowedCommandTypes();

        return this;
    }

    /**
     * @method getAllowedCommandTypes
     * @description Get the allowed command types Object
     * @returns Object
     */
    public getAllowedCommandTypes() : Object
    {
        return this.allowedCommandTypes;
    }

    /**
     * @method setAllowedCommandTypes
     * @description Set the allowed command types
     * @returns void
     */
    public abstract setAllowedCommandTypes(): void;

    /**
     * @method setCommandType
     * @param commandType 
     * @description Set the command type
     * @returns void
     */
    public setCommandType(config: RunnerConfig) :void 
    {
        this.commandType = config.commandType;
    }

    /**
     * @method getCommandType
     * @description Get the command type
     * @returns string
     */
    public getCommandType() : string
    {
        return this.commandType;
    }

    /**
     * @method setCommandType
     * @param commandType 
     * @description Set the command type
     * @returns void
     */
    public setCommandName(config: RunnerConfig) :void 
    {
        this.commandName = config.commandName;
    }

    /**
     * @method getCommandName
     * @description Get the command name
     * @returns string
     */
    public getCommandName() : string 
    {
        return this.commandName;
    }

    /**
     * @method setComandValue
     * @param commandValue 
     * @description Set the command commandValue
     * @returns void
     */
    public setComandValue(config: RunnerConfig) :void 
    {
        this.commandValue = config.commandValue;
    }

    /**
     * @method getCommandValue
     * @description Get the command atrributes
     * @returns string
     */
    public getWorkspace() : string
    {
        return this.commandWorkspace;
    }

        /**
     * @method setWorkSpace
     * @param commandValue 
     * @description Set the command commandValue
     * @returns void
     */
    public setWorkSpace(config: RunnerConfig) :void 
    {
        this.commandWorkspace = config.commandWorkspace;
    }

    /**
     * @method getCommandValue
     * @description Get the command atrributes
     * @returns string
     */
    public getCommandValue() : string
    {
        return this.commandValue;
    }

    /**
     * @method getMigrationTableName
     * @description get the migration table name
     * @param letterPosition 
     * @returns string | null
     */
    protected getMigrationTableNameOrNull(): string | null
    {
        if (this.getCommandName() === "migration") {
            return this.getCommandValue().charAt(0).toUpperCase() + this.getCommandValue().slice(1);
        }
        
        return null;
    }

    /*
    * @method executeCommand
    * @description Execute the command
    * @returns void
    */
    public abstract executeCommand() : void;

    /**
     * @method validateCommandType
     * @description Validate the command type
     * @returns boolean
     */
    public isValidCommandName() : boolean {
        return this.allowedCommandTypes['names'].includes(this.getCommandName());
    }

    /**
     * @method validateCommandValue
     * @description Validate the command value
     * @returns boolean
     */
    public isValidCommandValue() : boolean {
        return this.getCommandValue() !== '' && this.getCommandValue() !== undefined && this.getCommandValue() !== null;
    }
}

export default Runner;