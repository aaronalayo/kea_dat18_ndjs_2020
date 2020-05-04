const route = require('express').Router();
const User = require('../model/User.js')

route.post("/login", (req, res)=> {
    return res.send({response:"OK"});
});

route.post("/signup", async (req, res)=> {
    // const users = await User.query().select();
    //what fields do we need to signup
    //username, password, repeat password
    const { username, password, passwordRepeat} = req.body;

    const isPasswordTheSame = password === passwordRepeat;

    if (username && password && isPasswordTheSame) {
        if (password.length < 8 ) {

            return res.status(400).send({response: "Password does not fulfill the requirements"});

        } else {
            try {
                
                // 1.check if username exist
                const userFound = await User.query().select().where({'username': username}).limit(1);
                if(userFound.length > 0){
                    // 2.do if else check if it exist and give response
                    return res.send(400).send({response: "User already exist"});
                } else {
                    //Todo implement Role model and set relations Read link in slack
                    // 3.insert in db
                    // const role = await User.query().select().where('role':'USER')
                    const createdUser = await User.query().insert({
                        username: username, 
                        password: password,
                        roleId: 2
                    });

                    return res.send({response: `User has been created: ${createdUser.username}`});
                }
                    
                
       
                    
            
            
            
               
                

            } catch(error) {
                return res.status(500).send({response: "Something went wrong with database"});

            }
            

        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {

        return res.status(400).send({response: "Password does not match: password and passwordRepeat"});

    } else {

        return res.status(400).send({response: "Missing fields, either username, password, passwordRepeat"});
    }
});

route.post("/signout", (req, res)=> {
    return res.send({response:"OK"});
});


module.exports = route;