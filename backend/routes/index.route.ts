import { index } from "../controllers/index.controller";

const IndexRoutes = [
        {
            // Returns the home page
            method: 'GET',
            path: '/{path*}',
            options: index
        },
    ]

export { IndexRoutes }
