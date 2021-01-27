"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const path_1 = __importDefault(require("path"));
// const databasePath = "../../database/users.db3";
const databasePath = path_1.default.resolve(__dirname, "../../database/users.db");
console.log(databasePath);
const DatabaseConfig = {
    client: 'sqlite3',
    connection: {
        filename: databasePath
    },
    useNullAsDefault: true
};
exports.DatabaseConfig = DatabaseConfig;
