'use strict';

const UserController = require('../../../controllers/UserController');
const usersController = new UserController();

module.exports = [
    {
        method: 'POST',
        path: '/users',
        handler: (request) => usersController.createUser(request),
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: (request) => usersController.getUser(request),
    },
    {
        method: 'GET',
        path: '/users',
        handler: (request) => usersController.allUsers(),
    },
];
