'use strict';

const CreateUser = require('../usescases/CreateUser');
const GetUserById = require('../usescases/GetUserById');
const GetAllUsers = require('../usescases/GetAllUsers');
const UserRepository = require('../repository/UserRepository');
const UserSourceFactory = require('../repository/UserSourceFactory');
const UserEntityMap = require('../repository/mapEntities/UserEntityMap');
const User = require('../usescases/domain/User');

module.exports = class {
    constructor() {
        this.userRepository =
            new UserRepository(new UserSourceFactory(),
                new UserEntityMap());
    }

    createUser(request) {
        const { firstName, lastName, email } = request.payload;
        const useCase = new CreateUser(this.userRepository);
        useCase.setUser(new User(null, firstName, lastName, email));
        return useCase.execute();
    }

    getUser(request) {
        const idUser = request.params.id;
        const useCase = new GetUserById(this.userRepository);
        useCase.setIdUser(idUser);
        return useCase.execute();
    }

    allUsers() {
        const useCase = new GetAllUsers(this.userRepository);
        return useCase.execute();
    }
};
