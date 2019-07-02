'use strict';

const UserRepository = require('../usescases/repositories/UserRepository');

module.exports = class extends UserRepository {

    constructor(userSourceFactory, userEntityMap) {
        super();
        this.userSourceFactory = userSourceFactory;
        this.userEntityMap = userEntityMap;
    }

    save(user) {
        const userEntity = this.userEntityMap.serializeToEntity(user);
        const cacheSource = this.userSourceFactory.getCacheSource()        
        return cacheSource.save(userEntity)
    }

    remove(idUser) {
        const cacheSource = this.userSourceFactory.getCacheSource()
        return cacheSource.remove(idUser);
    }

    async get(idUser) {
        const cacheSource = this.userSourceFactory.getCacheSource()
        const data = await cacheSource.get(idUser);
        return this.userEntityMap.serializeToUser(data);
    }

    async all() {
        const cacheSource = this.userSourceFactory.getCacheSource()
        const data = await cacheSource.all();
        return this.userEntityMap.serializeToUser(data);
    }
};
