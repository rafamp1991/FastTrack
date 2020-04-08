"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5531,
            username: 'root',
            password: 'toor',
            database: 'clock',
            entities: [__dirname + '/../**/*.entity.{ts,js}'],
            synchronize: true,
            logging: 'all',
        }),
    },
];
//# sourceMappingURL=database.providers.js.map