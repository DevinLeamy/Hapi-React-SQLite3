import { Model, Modifiers } from "objection";
import { DatabaseConfig } from "../config/knexfile";
import Knex from "knex";

// Initialize Knex
const knex = Knex(DatabaseConfig);

const buildTable = async () => {
    await knex.schema.hasTable('users').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('name', 100);
                table.integer('age');
            })
        }
    })
}

// Creates user table if it does not exist
buildTable();

// Give the knex instance to objection
Model.knex(knex);

class User extends Model {
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
        }
    }
}

export { User } 