import * as mysql2 from 'mysql2';
import Workspace from './Workspace';

class Migration {
    private _tableName: string;
    private _fields: any;
    private _databaseName: string;
    private _connection: mysql2.Connection;

    constructor(workspace: Workspace) {
        this._databaseName = workspace.getDatabaseName();
        this._connection = mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: this._databaseName
        });
    }

    public addColumn(columnName: string, type: string, options: any = {}): void {
        this._fields[columnName] = { type, options };
    }

    public convertFieldsToSQL(): string {
        return '';
    }

    public run(): void {
        console.log('Running migration for table: ' + this._tableName);
    }

}

export default Migration;