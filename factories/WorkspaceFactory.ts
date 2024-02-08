import Factory from "./Factory";
import * as fs from "fs";
import * as path from "path";

class WorkspaceFactory extends Factory {
    public name: string = "WorkspaceFactory";
    public path: string = "/worskapces/";

    public constructor(worskpace: string) {
        super();
    }
    
    /*
    * @method createWorkSpace
    * @description create the workspace
    * @param worskpace
    * @returns void   
    */
    public static createWorkSpace:Function = (worskpace: string) : void => {
        const workspacePath = `${path.join('workspaces/', worskpace, '/migrations/')}`;
        try {
            if (!fs.existsSync(`${workspacePath}`)) {
                fs.mkdirSync(`${workspacePath}`, { recursive: true });
              }
        } catch (error) {
            console.log(`Error while trying to generate new worskspace: ${error}`);
        }
    }

        /*
    * @method createWorkSpace
    * @description create the workspace
    * @param worskpace
    * @returns void   
    */
    public static removeWorkSpace:Function = (worskpace: string) : void => {
        const workspacePath = `${path.join('workspaces/', worskpace, '/')}`;
        try {
            console.log(`Removing worskpace: ${worskpace}`);
            if (fs.existsSync(`${workspacePath}`)) {
                fs.rmSync(workspacePath, { recursive: true, force: true });
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