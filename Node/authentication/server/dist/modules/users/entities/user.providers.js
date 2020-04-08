"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user.entity");
const database_tokens_constants_1 = require("../../../common/config/database.tokens.constants");
exports.UserProviders = [
    {
        provide: database_tokens_constants_1.USER_REPOSITORY_TOKEN,
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: [database_tokens_constants_1.DB_CONNECTION_TOKEN],
    },
];
//# sourceMappingURL=user.providers.js.map