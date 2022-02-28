const router = require('express').Router();
let User = require('../models/user.model');              //mongoose model for users

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))                      //returns users from Db in jsonfile
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;                     // access data in a string or JSON[receive data]
                                                          
  const newUser = new User({username});

  newUser.save()                                         //add new user to database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 