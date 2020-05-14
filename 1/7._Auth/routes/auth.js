const route = require('express').Router();
const User = require('../model/User.js');
const Role = require('../model/Role.js');


const bcrypt = require('bcrypt');
const saltRounds = 12;




route.post("/login", async (req, res)=> {
    //1. Retrieve login details and validate
    const { username, password} = req.body;  

    //2. Check user match in db
    try {
    const user = await User.query().select().where({'username': username}).then(function (user) {
        if (!user) {
            res.status({ error: 'Invalid username or password.'});
        } else {
           //3. Bcrypt compare
            bcrypt.compare(password, user[0].password).then((result)=> {
                // console.log(result);  
                if (result == true) {
                     //4. sessions
                    req.session.user = user;
                    if (user[0].role == 'admin') {
                        return res.redirect('/admin');
                    } else {
                        return res.redirect('/dashboard');
                    }
                   
                } else {
                    return res.redirect('/login')
                    }
                
            })
        } 
    }) 
    } catch(error) {
    return res.status(500).send({response: "Something went wrong with database"});

}
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
                    return res.status(400).send({response: "User already exist"});
                    
                } else {         
                    const defaultUserRole = await Role.query().select().where({role: 'USER'});
                    
                    const hashedPassword = await bcrypt.hash(password, saltRounds);

                    const createdUser = await User.query().insert({
                        username: username, 
                        password: hashedPassword,
                        // 3.insert in db
                        roleId: defaultUserRole[0].id
                    });       
                    return res.send(`<h1>User ${createdUser.username} has been created</h1>`)
                    //return res.send({response: `User has been created: ${createdUser.username}`});
                }
                    

            } catch(error) {
                return res.write(`<h1>Something went wrong with database</h1>`)
                // return res.status(500).send({response: "Something went wrong with database"});

            }
            

        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {

        return res.status(400).send({response: "Password does not match: password and passwordRepeat"});

    } else {

        return res.status(400).send({response: "Missing fields, either username, password, passwordRepeat"});
    }
});


route.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});


module.exports = route;