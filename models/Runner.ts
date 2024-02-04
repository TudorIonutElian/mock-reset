abstract class Runner {
    private commandType: string;
    private commandName: string;
    private commandValue: string;
    protected allowedCommandTypes: Object;

    public constructor(commandType: string, commandName:string, commandValue: string) 
    {
        this.setCommandType(commandType)
        this.setCommandName(commandName);
        this.setComandValue(commandValue);
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
    public setCommandType(commandType: string) :void 
    {
        this.commandType = commandType;
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
    public setCommandName(commandName: string) :void 
    {
        this.commandName = commandName;
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
    public setComandValue(commandValue: string) :void 
    {
        this.commandValue = commandValue;
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