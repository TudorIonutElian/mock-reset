const DefaultTables = {
    users : {
        columns: { 
            id: { databaseColumnName: 'id', databaseColumnType: 'integer', databaseAutoIncrement: true, databasePrimaryKey: true },
            firstName: { databaseColumnName: 'firstName', databaseColumnType: 'integer', databaseColumnNullable: true },
            lastName: { databaseColumnName: 'lastName', databaseColumnType: 'varchar', databaseColumnLength: 255, databaseColumnNullable: true },
            email: { databaseColumnName: 'email', databaseColumnType: 'varchar', databaseColumnLength: 255, databaseColumnNullable: false }
        }
    }
}


export default DefaultTables;