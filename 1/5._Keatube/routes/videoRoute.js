const router = require("express").Router();//accesing the router from express

//todo what data should be inside of each video object
const video = []

router.get("/test", (req, res) => {
    return res.send({message: "Does the router work?"})
});

module.exports = router