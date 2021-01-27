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
const hapi_1 = require("@hapi/hapi");
const users_route_1 = require("./routes/users.route");
const index_route_1 = require("./routes/index.route");
const port = 3000;
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new hapi_1.Server({ port: port, host: 'localhost' });
    // Allows files to be sent
    yield server.register(require("@hapi/inert"));
    // Set index routes
    for (let route of index_route_1.IndexRoutes) {
        server.route(route);
    }
    // Set users routes
    for (let route of users_route_1.UsersRoutes) {
        server.route(route);
    }
    yield server.start();
    console.log(`Server running on ${server.info.uri}`);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});
init();
