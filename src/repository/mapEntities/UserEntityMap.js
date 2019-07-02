'use strict';

const UserEntity = require('../entities/UserEntity');
const User = require('../../usescases/domain/User');

const _serializeSingleUserEntity = (user) => {
    return new UserEntity(
        user.id,
        user.firstName,
        user.lastName,
        user.email
    );
};

const _serializeSingleUser = (user) => {
    return new User(
        user.id,
        user.firstName,
        user.lastName,
        user.email
    );
}

module.exports = class {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUserEntity);
        }
        return _serializeSingleUserEntity(data);
    }

    serializeToUser(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
};
