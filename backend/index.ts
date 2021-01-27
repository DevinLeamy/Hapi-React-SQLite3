import { Server } from "@hapi/hapi";
import { UsersRoutes } from "./routes/users.route";
import { IndexRoutes } from "./routes/index.route";

const port = 3000;

const init = async () => {
    const server: Server = new Server({ port: port, host: 'localhost' });

    // Allows files to be sent
    await server.register(require("@hapi/inert")); 

    // Set index routes
    for (let route of IndexRoutes) {
        server.route(route);
    }
    // Set users routes
    for (let route of UsersRoutes) {
        server.route(route);
    }

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
