// jQuery.fn.centerElement = function () {
//     this.css ("position", "absolute");
//     this.css ("top", ($ (window). height () - this.height ()) / 2 + $ (window). scrollTop () + "px");
//     this.css ("left", ($ (window). width () - this.width ()) / 2 + $ (window). scrollLeft () + "px")
//     return this;
//  }

$('body').css("text-align", "center");


$("#title h2").text("New title");

$(".subtitle-box").css("background-color", "#8888ff");

$(".temp").hide();

$("div.reason").css("border", "dashed blue 4px");

$("ol li").css("font-weight", "bold");

$("#first-list li:last").css("text-decoration", "underline");

// $("#first-list li:eq(1)").css("text-decoration", "line-through");

$("#first-list li:nth-child(1)").css("text-decoration", "line-through");

$(".second-list").css("font-style", "italic");

$(".second-list span").css("font-size", "0.5em");

// $(".unused-box label").text("label").empty();
$(".unused-box label:eq(0)").remove()

$(".unused-box ").append("<p>Second Sentence</p>");

$("<p>First Sentence</p>").insertAfter($(".unused-box label"));
$(".unused-box").prepend("<p>First Sentence</p>")

$(".unused-box").attr('class','used-box');



$(document).ready(() =>{
    // $(".used-box").click(function(){
    //     $(this).toggleClass("used-boxed-clicked");
    // });

        $(".used-box").click(event => {
        $(event.currentTarget).toggleClass("used-boxed-clicked");
    });

    // $(".used-box").on("click", () => {
    //     console.log("233456787654")
    // });

    // $( "#submit-button" ).mouseover(function() {
    //     $( "#submit-button" ).append( "You're ready to click." );
    //   });

     
});

// $(() => {

// });
$( "#submit-button" ).mouseenter(()  => {
    $(event.currentTarget).text("You're ready to click." )
  }).mouseout(() => {
    $(event.currentTarget).text("click");
  });  
    
  


//   $( "#submit-button" ).mouseout(function() {
//     $( "#submit-button" ).text("click");
//   });

  // $("#submit-button").click(event => {
  //   $(event.currentTarget).append("ol li:eq(3)").text("Reason 4");
  // });


$("#submit-button").click(() => {
  let count = $("#first-list li").length; 

  $("#first-list").append(`<li>Reason ${count + 1}</li>`);

  console.log($(event.currentTarget).parent());
});