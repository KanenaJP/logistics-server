"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'type': 'postgres',
    'url': process.env.DB_URL,
    'entities': [process.env.ENTITY_PATH],
    'synchronize': true
};
//# sourceMappingURL=ormconfig.js.map