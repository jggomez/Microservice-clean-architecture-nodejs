'use strict';

/**
 * Get User By Id.
 */
class GetAllUsers {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute() {
        return this.userRepository.all();
    }
}

module.exports = GetAllUsers;
