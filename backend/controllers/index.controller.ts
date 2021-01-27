import path from "path";

const index = {
    handler: {
        directory: {
            path: path.join(__dirname, "../../../frontend/build"),
            listing: false,
            index: true
        }
    }
}

export { index }