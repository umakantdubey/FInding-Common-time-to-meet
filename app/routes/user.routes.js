module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', user.create);

    // Retrieve all User
    app.get('/users', user.findAll);

    // Retrieve a single User with UserId
    app.get('/users/:userId', user.findOne);

    // Update a User with UserId
    app.put('/users/:userId', user.update);

    // Delete a user with userId
    app.delete('/users/:userId', user.delete);
}
