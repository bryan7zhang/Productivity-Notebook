let projectModel = require('../models/projectModule');


function getMatchingProjects(req,res) {
 
    let user = req.user;
    let projects = projectModel.getProjects(user.user_id);

    projects.then( ([data,meta]) => {
        res.status(200).json(data);
    }).
    catch(e => res.status(500).json({message:e.message}))
           
}

module.exports = {
    getMatchingProjects:getMatchingProjects
}