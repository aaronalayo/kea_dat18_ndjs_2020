const route = require('express').Router();
const User = require('../model/User.js')


route.get('/users/roles', async (req, res) => {
    try {

        const username = req.body.username;
        const users =  await User.query().select('username').withGraphFetched('role');
        res.json(users);
    } catch (e) {
    res.send({ message: "Error in Fetching user" });
    }
    
});



route.get('/setsessionvalue', (req, res) => {
    
    // const sess = req.session;
    // if(sess.username)
    // req.body.username;
        // return res.redirect('\login')
    req.session.username = req.query.value;// take the value from the request and dynamically set it here

    return res.send({})
});

route.get('/getsessionvalue', (req, res) => {
    console.log(req.session);
    return res.send({value: req.session.myvalue})
})
module.exports = route;