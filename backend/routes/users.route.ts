import { index } from "../controllers/index.controller";
import { getUsersData, addUser, getUserByName } from "../controllers/users.controller";

const UsersRoutes = [
        {
            // Returns users page
            method: 'GET',
            path: '/users/{path*}',
            options: index
        },
        {
            // Returns users data
            method: "GET",
            path: "/user_data",
            options: getUsersData
        },
        {
            // Returns data of user with give name
            method: "GET",
            path: '/user_data/{user*}',
            options: getUserByName
        },
        {
            // Adds user to database
            method: 'POST',
            path: '/add_user',
            options: addUser
        }
    ]

export { UsersRoutes }