

$.get("videos?page = 1", (response) => {
    console.log(response.response);
    response.response.map((video) => {
        $("#video-gallery")
        .append(`<a href="/player/${video.fileName}">${video.title}</a>`);
    });
});




{/* <a href="player/319dc336-e040-4bb2-9fb0-ef7c6f24e7f2.mp4">Watch the video</a>  */}


//for the ckient to request from a server


