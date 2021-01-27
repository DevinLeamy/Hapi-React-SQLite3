"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const objection_1 = require("objection");
const knexfile_1 = require("../config/knexfile");
const knex_1 = __importDefault(require("knex"));
// Initialize Knex
const knex = knex_1.default(knexfile_1.DatabaseConfig);
const buildTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield knex.schema.hasTable('users').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('name', 100);
                table.integer('age');
            });
        }
    });
});
// Creates user table if it does not exist
buildTable();
// Give the knex instance to objection
objection_1.Model.knex(knex);
class User extends objection_1.Model {
    static get tableName() {
        return 'users';
    }
    // Validation for new entries 
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id', 'name', 'age'],
            properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                age: { type: 'number' }
            }
        };
    }
}
exports.User = User;
