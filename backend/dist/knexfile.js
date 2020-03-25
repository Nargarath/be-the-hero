"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knexConfig = {
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
exports.client = knexConfig.client, exports.connection = knexConfig.connection, exports.migrations = knexConfig.migrations, exports.useNullAsDefault = knexConfig.useNullAsDefault;
//# sourceMappingURL=knexfile.js.map