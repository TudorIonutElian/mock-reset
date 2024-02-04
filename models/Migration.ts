class Migration {
    private _tableName: string;
    private _fields: any;

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