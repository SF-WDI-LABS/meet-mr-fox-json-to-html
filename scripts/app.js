console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP

$(".first_name").text(data.first_name);
$(".occupation").text(data.occupation);
$(".qualities").text(data.qualities.join(", ") || "pretty plain" );

/*
----- find for loop solution for [i]qualities
$(".qualities").text(data.qualities[0] + " and " + data.qualities[1]);

----- Tried a loop, only adds final array place
for(var i = 0; i < data.qualities.length; i++) {
  $(".qualities").text(data.qualities[i])
};
*/

$(".location").text(data.location);
var siblings1 = data.siblings.length;
  $(".sibling_count").text(siblings1);

//Ugh I messed up bad, and used a previously assigned variable! my loops wouldn't work!


//This took me a while. I was thrown by the (:) use.
  $("img.img-responsive.center-block").attr({
      src: data.profile_image, title: data.first_name + " " + data.last_name + "'s picture"
    });

});
