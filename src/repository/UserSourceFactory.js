const userCacheSource = require('./UserCacheSource');

module.exports = class {
    getCacheSource() {
        return userCacheSource;
    }
};