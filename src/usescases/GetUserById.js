'use strict';

/**
 * Get User By Id.
 */
class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    setIdUser(id) {
        this.idUser = id;
    }

    execute() {
        return this.userRepository.get(this.idUser);
    }
}

module.exports = GetUserById;
