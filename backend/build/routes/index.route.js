"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const index_controller_1 = require("../controllers/index.controller");
const IndexRoutes = [
    {
        // Returns the home page
        method: 'GET',
        path: '/{path*}',
        options: index_controller_1.index
    },
];
exports.IndexRoutes = IndexRoutes;
