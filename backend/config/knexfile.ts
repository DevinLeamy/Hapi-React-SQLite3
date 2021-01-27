import path from "path";

// const databasePath = "../../database/users.db3";
const databasePath = path.resolve(__dirname, "../../database/users.db");
console.log(databasePath);

const DatabaseConfig = {
    client: 'sqlite3',
    connection: {
        filename: databasePath
    },
    useNullAsDefault: true
};

 export { DatabaseConfig }