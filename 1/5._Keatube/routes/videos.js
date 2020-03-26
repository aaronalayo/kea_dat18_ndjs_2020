
const router = require("express").Router();
const uuid = require('uuid').v4;

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
    console.log(videos.slice(start, end));
    return res.send({ response: videos });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

module.exports = router;