import Factory from "./Factory";
import * as fs from "fs";

class WorkspaceFactory extends Factory {
    public name: string = "WorkspaceFactory";
    public path: string = "/worskapces/";

    public constructor(worskpace: string) {
        super();
    }
    
    /*
    * @method buildWorkspace
    * @description Build the workspace
    * @param worskpace
    * @returns void   
    */
    public static buildWorkspace:Function = (worskpace: string) : void => {
        try {
            if (!fs.existsSync(`workspaces/${worskpace}`)) {
                fs.mkdirSync(`workspaces/${worskpace}`);
              }
        } catch (error) {
            console.log(`Error while trying to generate new worskspace: ${error}`);
        }
    }

    public displayDetails:Function = () : void => {
        console.log(`Building the environment with name: `);
    }
}

export default WorkspaceFactory;