let db = require('../util/database');

function findUser(username,password) {
    return db.execute(`Select * from users where username='${username}' and password='${password}'`);
}

function getUserId(username) {
    return db.execute("Select user_id from users where username ='" +username +"'");
}

module.exports = {
    findUser: findUser,
   getUserId: getUserId
}