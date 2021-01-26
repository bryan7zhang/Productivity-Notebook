let userModel = require('../models/usersModel');
let jwt = require('jsonwebtoken');

function authUser(req,res) {
    let body = req.body;
    
    let users = userModel.findUser(body.username,body.password);
    
    users.then(([data,meta]) => {
        if(data.length==1) {
            res.status(200).json({token:
                jwt.sign({
                    username:data[0].username,
                    password:data[0].password,
                    id:data[0].user_id
                },'MYSECRETKEY')
            });
        } else {
            res.status(401).json({message: 'No such user'})
        }
    })
}

module.exports = {
    authUser: authUser
}