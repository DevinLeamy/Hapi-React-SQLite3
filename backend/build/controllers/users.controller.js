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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.addUser = exports.getUsersData = void 0;
const user_model_1 = require("../models/user.model");
const getUsersData = {
    handler: (request, h) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Getting user data");
        try {
            //Gets all users in the database
            const users = yield user_model_1.User.query()
                .select();
            return { data: users };
        }
        catch (error) {
            console.error(error);
            return { data: [] };
        }
    })
};
exports.getUsersData = getUsersData;
const getUserByName = {
    handler: (request, h) => __awaiter(void 0, void 0, void 0, function* () {
        // Get query params: const params = request.query
        const params = request.query;
        const userName = params.name;
        console.log(`Getting the data of user ${userName}`);
        try {
            if (userName === undefined) {
                throw "Bad data";
            }
            const user = yield user_model_1.User.query()
                .where('name', userName)
                .limit(1);
            return user;
        }
        catch (error) {
            console.error(error);
            return 'An error occured when fetching the user data';
        }
    })
};
exports.getUserByName = getUserByName;
const addUser = {
    handler: (request, h) => __awaiter(void 0, void 0, void 0, function* () {
        // Get request body: const payload = request.payload
        const payload = request.payload;
        try {
            // Adds user to table 'users'
            const user = yield user_model_1.User.fromJson(payload)
                .$query()
                .insert();
            console.log("User Added");
            return user;
        }
        catch (error) {
            console.error(error);
            return h.response('An error occured when fetching the user data').code(500);
        }
    })
};
exports.addUser = addUser;
