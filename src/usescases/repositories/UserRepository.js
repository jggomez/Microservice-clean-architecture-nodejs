'use strict';

module.exports = class {
    constructor() { }

    save(user) {
        // To be overridden in concrete implementation
    }

    remove(user) {
        // To be overridden in concrete implementation
    }

    get(idUser) {
        // To be overridden in concrete implementation
    }

    all() {
        // To be overridden in concrete implementation
    }
};
