abstract class Runner {
    private commandName: string;
    private commandValue: string;

    public constructor(commandName:string, commandValue: string) 
    {
        this.setCommandName(commandName);
        this.setComandValue(commandValue);

        return this;
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
}

export default Runner;