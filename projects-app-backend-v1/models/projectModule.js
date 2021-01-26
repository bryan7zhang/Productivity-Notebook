let db = require('../util/database');

function getProjects(userId) {
    return db.execute('Select * from contacts where user_id = ' + userId);
}

module.exports = {
    getProjects: getProjects
}