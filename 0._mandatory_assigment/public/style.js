$('header').css("text-align", "center");
$('header').css("color", "white");
$('header').css("font-size", "30px");
$('header').css("background-color", "#9bdaf8");
$('header').css("padding-bottom", '5px');
// $('header').css("overflow-y", "scroll");

$('body').css('height', '100%');
$('body').css('width', '100%');
$('body').css('position','relative');
//  $('body').css('overflow-y', 'scroll');
$('body').css('padding-bottom', '10px');

$('nav').css('float', 'left');
$('nav').css('width', '20%');
$('nav').css('height', '810px');
$('nav').css('background', 'white');
$('nav').css('padding', '20px');

$('nav ol').css('padding', '0');
$('nav ol').css('list-style-type', 'none');


$('article').css('float', 'left');
$('article').css('padding', '20px');
$('article').css('width',  '80%');
$('article').css('background-color', 'white');
$('article').css('height', '810px');
$('article').css('overflow-y', 'hidden');
$('article').css('overflow-x', 'hidden');


$('.footer').css('background-color', '#9bdaf8');
$('.footer').css('padding', '10px 0');
$('.footer').css('text-align', 'center');
$('.footer').css('font-size', '20px');
$('.footer').css('color', 'white');
$('.footer').css('position', 'fixed');
$('.footer').css('botton', '20px');
$('.footer').css('left', '0');
$('.footer').css('right', '0');
$('.footer').css('width', '100%');

$( "#nav-button1" ).mouseenter(()  => {
    $(event.currentTarget).text("previous topic" )
  }).mouseout(() => {
    $(event.currentTarget).text("previous");
  });  
 
$( "#nav-button2" ).mouseenter(()  => {
    $(event.currentTarget).text("next topic" )
  }).mouseout(() => {
    $(event.currentTarget).text("next");
  });     