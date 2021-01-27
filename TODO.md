1. Create RESTful API to serve client
    - GET /api/users/data -> outputs user data
    - POST /api/users/create_user -> creates new user
    - GET /api/users/{user} -> gets data of one user
    - POST /api/users/update_age/{user} -> updates the age of one user
2. Make the RESTful API follow MVC organization
3. Use Knex.js and Objection.js to create SQL (SQLite) database
    - Implement queries in user model
    - Make use of TablePlus