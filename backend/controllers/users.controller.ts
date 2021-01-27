import { Request, ResponseToolkit } from "@hapi/hapi";
import { User } from "../models/user.model";

interface Person {
    id: number,
    name: string,
    age: number
}

const getUsersData = {
        handler: async (request: Request, h: ResponseToolkit) => {
            console.log("Getting user data");
            try {
                //Gets all users in the database
                const users = await User.query()    
                                        .select();
                return { data: users };
            } catch (error) {
                console.error(error);
                return { data: [] };
            }
        }
    }

const getUserByName = {
    handler: async (request: Request, h: ResponseToolkit) => {
        // Get query params: const params = request.query
        const params = request.query;
        const userName: string = params.name;
        console.log(`Getting the data of user ${userName}`);
        try {
            if (userName === undefined) {
                throw "Bad data";
            }
            const user = await User.query()
                                .where('name', userName)
                                .limit(1);
            return user;
        } catch (error) {
            console.error(error);
            return 'An error occured when fetching the user data';
        }
    }
}

const addUser = {
    handler: async (request: Request, h: ResponseToolkit) => {
        // Get request body: const payload = request.payload
        const payload = request.payload as Person;

        try {
            // Adds user to table 'users'
            const user = await User.fromJson(payload)
                                .$query()
                                .insert();
            console.log("User Added");
            return user;

        } catch (error) {
            console.error(error);
            return h.response('An error occured when fetching the user data').code(500);
        }
    }
}

export { getUsersData, addUser, getUserByName }