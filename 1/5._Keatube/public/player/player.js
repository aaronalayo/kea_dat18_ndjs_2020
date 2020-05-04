// todo console.log the path variable!!!
const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

$.get(`/videos/${videoId}`)
    .done((response) => {
        console.log("Is this it", response.response);

        $(".title").text(response.response.title)
        const player = `<video id="player" width="320" height="240" controls>
                    <source src="/${videoId}">
                    Your browser does not support the video tag.
                </video>`;
        $("#player-wrapper").append(player);
        $(".description").text(response.response.description)

    })
    .catch((error) => {
        console.log(error);
        $(".title").text("Could not find video");
    });



    var commentForm = document.getElementById('comment-form');

    // Adding to Comment Form Submit Event
    commentForm.addEventListener("submit", addNewComment);

    function addNewComment(event){
        event.preventDefault();
        var newComment = {
          "name": document.getElementById('new_comment_name').value,
          "email": document.getElementById('new_comment_email').value,
          "comment": document.getElementById('new_comment_text').value
          
        }
        console.log(newComment)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", serverUrl+"comment", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
          if (xhr.readyState != 4 || xhr.status != 200) return;
  
          // On Success of creating a new Comment
          console.log("Success: " + xhr.responseText);
          commentForm.reset();
        };
        xhr.send(JSON.stringify(newComment));
  }