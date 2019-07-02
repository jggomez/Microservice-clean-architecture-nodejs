'use strict';

/**
 * Create User
 */
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    setUser(user) {
        this.user = user;
    }

    execute() {       
        return this.userRepository.save(this.user);
    }
}

module.exports = CreateUser;
