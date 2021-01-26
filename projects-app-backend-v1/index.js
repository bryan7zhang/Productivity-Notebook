let express = require('express');
let cors = require('cors');
let app = express();
let jwt = require('jsonwebtoken');
let bodyParser = require('body-parser');
let authController = require('./controllers/loginController');
let projectController = require('./controllers/projectController');

app.use(bodyParser.urlencoded({ extended: false})) //middleware

app.use(bodyParser.json()) // middleware, parse application/json

app.post('/login', authController.authUser);

app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'MYSECRETKEY', (err,decode) => {
            if(err) {
                return res.status(401).json({message:'Unauthorized user'})
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        return res.status(401).json({message:'Unauthorized user'});
    }
})


app.get('/getProjects', projectController.getMatchingProjects);


app.listen(process.env.PORT || 8888, () => console.log('Server ready...'))