"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_entity_1 = require("./auth.entity");
const database_tokens_constants_1 = require("../../../common/config/database.tokens.constants");
exports.AuthProviders = [
    {
        provide: database_tokens_constants_1.AUTH_REPOSITORY_TOKEN,
        useFactory: (connection) => connection.getRepository(auth_entity_1.AuthEntity),
        inject: [database_tokens_constants_1.DB_CONNECTION_TOKEN],
    },
    {
        provide: database_tokens_constants_1.USER_REPOSITORY_TOKEN,
        useFactory: (connection) => connection.getRepository(auth_entity_1.AuthEntity),
        inject: [database_tokens_constants_1.DB_CONNECTION_TOKEN],
    },
];
//# sourceMappingURL=auth.providers.js.map