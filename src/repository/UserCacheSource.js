'use strict';

const UserDataSource = require('./UserDataSource');

class UserCacheSource extends UserDataSource {

    _dataAsArray() {
        return Array.from(this.mapUsers.values());       
    }

    constructor() {
        super();
        this.mapUsers = new Map();
    }

    save(user) {
        const row = Object.assign({}, user);
        const rowId = Math.round(Math.random() * 1000);
        row.id = rowId;
        this.mapUsers.set(rowId, row);
        return Promise.resolve(row);
    }

    remove(idUser) {
        this.mapUsers.delete(idUser);
        return Promise.resolve();
    }

    get(idUser) {                
        return Promise.resolve(this.mapUsers.get(idUser));
    }

    all() {
        return Promise.resolve(this._dataAsArray());
    }
};

const instance = new UserCacheSource()
Object.freeze(instance);

module.exports = instance;
