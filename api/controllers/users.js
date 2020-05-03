let User = require('../schema/user');
const jwt = require('../services/jwt');

function registerUser(req,res){
    let user = new User();
    let params = req.body;
    user.fullName = params.fullName;
    user.user = params.user;
    user.password = params.password;
    user.email = params.email;
    user.phone = params.phone;
    user.save((err, storedUser) => {
        if(err){
            console.log(err);
            res.status(500).send({mesage:'Server error.'});
        } else {
            if(!storedUser){
                res.status(404).send({message:'Error while saving.'});
            } else {
                res.status(201).send({message:'User stored', user : storedUser});
            }
        }
    });
}

function login(req, res){
    let usuario = req.body.user;
    let password = req.body.password;

    if (usuario == undefined) {
        res.status(400).send({'message':'User is missing.'});
    }
    if (password == undefined) {
        res.status(400).send({'message':'Password is missing.'});
    }

    User.findOne({user: usuario},(err,user) => {
        if(err){
            console.log(err);
            res.status(500).send({message: 'Server error.'});
        } else {
            if(! user){
                console.log("Not found")
                res.status(404).send({message: 'User not found.'});
            } else {
                if(password == user.password){
                    let token = jwt.createToken(user);
                    res.status(200).send({message: 'Logged in', token : token, User : user});
                } else {
                    res.status(403).send({message: 'Invalid password'});
                }
            }
        }
    });
}


module.exports = {
    registerUser,
    login
};