
const router = require("express").Router();

const crypto = require("crypto");


const uuid = require('uuid').v4;
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const fileName = crypto.randomBytes(20).toString("hex");
        const mimetypeArray = file.mimetype.split("/");
        if(mimetypeArray[0] === "video") {

            // const extension = file.mimetype.split('/').pop();
        const extension = mimetypeArray[mimetypeArray.length - 1];
        // cb(null, file.filename + '.' + extension)
        cb(null, fileName + "." + extension);

        } else {
            cb("Not a video")
        }
        
    }
});
const upload = multer({storage:storage});



const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "3f1e146c-3295-444a-a7be-e758c560536b.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}];

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page -1) * videosPerPage;
    const end = start * videosPerPage
    // page 1 0, 10
    // page 2 10, 20
    // page 3 20, 30
    // console.log(videos.slice(start, end));
    return res.send({ response: videos });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single('video'), (req, res) => {

    let errors= [];


    //1. server side validation
    const video = {
        fileName: req.file.filename,
        title: req.body.title || "",
        description: req.body.description  || "",
        thumbnail: "",//to do
        category: req.body.category || "unknown", //to do : check if it belongs to accepted categories
        tags: req.body.tags.split(/[,\s]\s*/),
        uploadDate: new Date()
    };


    
    if(video.title.length < 8 || video.title.length > 64) {
        errors.push("Title or not between 8 and 64.");
    };

    if (video.description.length > 2048) {
        errors.push("The description can't be longer than 2048 chars");
    };

    if (errors.length > 0) {
        return res.send({response: errors});
    } else {
        videos.push(video);
        return res.redirect("/player/"+ video.fileName);

    } 
});


    

module.exports = router;