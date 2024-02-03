import Factory from "./Factory";

class EnvironmentFactory extends Factory {
    public name: string = "X";
    
    public build:Function = (params: Array<String>) : void => {
        console.log(`Building the environment with name: `);
    }

    public displayDetails:Function = () : void => {
        console.log(`Building the environment with name: `);
    }
}

export default EnvironmentFactory;