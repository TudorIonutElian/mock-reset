import * as mysql2 from 'mysql2';
import WorkspaceFactory from '../factories/WorkspaceFactory';

class Workspace {
    private connection: mysql2.Connection;
    private databaseName: string;

    constructor(databaseName: string) {
        this.databaseName = databaseName;
        this.connection = mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
        });
    }

    /**
     * @method getDatabaseName
     * @description Get the database name
     * @returns string
     */
    public getDatabaseName(): string {
        return this.databaseName;
    }

    /**
     * @method createDatabase
     * @description Create the database
     * @returns Promise<void>
     */
    public createDatabase(): Promise<void> {
        try {
            this.connect();

            return new Promise((resolve, reject) => {
                this.connection.query(`CREATE DATABASE IF NOT EXISTS ${this.getDatabaseName()}`, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
        } catch (error) {
            throw new Error(error);
        }
    }


      /**
     * @method removeWorkspace
     * @description Remove the workspace
     * @returns Promise<void>
     */
      public removeWorkspace(databaseName: string) : Promise<void> {
        try {
            this.connect();

            return new Promise((resolve, reject) => {
                this.connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, (error) => {
                    if (error) {
                        reject(error);
                    } else {

                        resolve();
                    }
                });
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * @method createMigrationsTable
     * @description Create the migrations table
     * @returns Promise<void>
     */
    public createMigrationsTable(): Promise<void> {
        try {
            this.connect();

            return new Promise((resolve, reject) => {
                this.databaseUseStatementQuery();
                this.createMigrationsTableQuery();                
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * @method databaseUseStatement
     * @description Use the database
     * @returns Promise<void>
     */
    private databaseUseStatementQuery(): Promise<void> {
        return new Promise((resolve, reject) => {
            const useDatabaseQuery = `USE ${this.getDatabaseName()};`;
            this.connection.query(`${useDatabaseQuery}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });            
        });
    }

    /**
     * @method createMigrationsTableQuery
     * @description Create the migrations table
     * @returns Promise<void>
     */
    private createMigrationsTableQuery(): Promise<void> {
        return new Promise((resolve, reject) => {
            const createMigrationsTableQuery = `CREATE TABLE IF NOT EXISTS migrations (id integer(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
            this.connection.query(`${createMigrationsTableQuery}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * @method connect
     * @description connect to the database
     * @return Promise<void>
     */
    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.connect((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * @method disconnect
     * @description disconnect from the database
     * @returns 
     */
    disconnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.end((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * @method build
     * @description Build the workspace
     * @param workspace
     * @returns void   
     */
    public build(workspace: string) : void {
        try {
            WorkspaceFactory.createWorkSpace(workspace);
        } catch (error) {
            console.log(`Error while trying to generate new worskspace: ${error}`);
        }
    }

    /**
     * @method remove
     * @description remove the workspace
     * @param workspace
     * @returns void   
     */
    public remove(workspace: string) : void {
        try {
            WorkspaceFactory.removeWorkSpace(workspace);
        } catch (error) {
            console.log(`Error while trying to generate new worskspace: ${error}`);
        }
    }
}

export default Workspace;