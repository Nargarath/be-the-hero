import knex from 'knex';

const knexConfig: knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/db.sqlite'
    },
    migrations: {
        directory: './src/database/migrations',
        extension: 'ts'
    },
    useNullAsDefault: true
};


export const { client, connection, migrations, useNullAsDefault } = knexConfig;
