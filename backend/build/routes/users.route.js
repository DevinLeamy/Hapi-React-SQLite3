"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const index_controller_1 = require("../controllers/index.controller");
const users_controller_1 = require("../controllers/users.controller");
const UsersRoutes = [
    {
        // Returns users page
        method: 'GET',
        path: '/users/{path*}',
        options: index_controller_1.index
    },
    {
        // Returns users data
        method: "GET",
        path: "/user_data",
        options: users_controller_1.getUsersData
    },
    {
        // Returns data of user with give name
        method: "GET",
        path: '/user_data/{user*}',
        options: users_controller_1.getUserByName
    },
    {
        // Adds user to database
        method: 'POST',
        path: '/add_user',
        options: users_controller_1.addUser
    }
];
exports.UsersRoutes = UsersRoutes;
