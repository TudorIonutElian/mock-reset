class MigrationFactory {

    public static TABLE_NAME_PLACEHOLDER = 'tableName';
    public static MIGRATION_TEMPLATE = `import Migration from '../../../models/Migration';\n\nexport default class ${MigrationFactory.TABLE_NAME_PLACEHOLDER} extends Migration {\n\n  public up() : void {\n\n  }\n\n  public down() : void {\n\n  }\n\n}`;

    /**
     * Generate a migration template
     * @returns string
     */
    public static generateMigrationTemplate(migrationTableName: string): string 
    {
        return MigrationFactory.stringReplaceTableNamePlaceHolder(migrationTableName);
    }

    /**
     * Replace the table name placeholder with the migration table name
     * @param migrationTableName 
     * @returns string
     */
    public static stringReplaceTableNamePlaceHolder(migrationTableName: string): string 
    {
        return MigrationFactory.MIGRATION_TEMPLATE.replace(MigrationFactory.TABLE_NAME_PLACEHOLDER, migrationTableName);
    }
}

export default MigrationFactory;