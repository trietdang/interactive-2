
$(document).ready(function(){
//    $( "#circle" ).click(function() {
//   $( this ).addClass("animation");
// });

  $( "#circle" ).click(function() {
  $( this ).addClass("animation");
  
  
  //background color change.
      if($("#background").attr('style'))
    $("#background").removeAttr('style');
      else
    $("#background").css('background', 'darkblue')

   // number of drops created.
var nbDrop = 858; 

// function to generate a random number range.
function randRange( minNum, maxNum) {s
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain
createRain();

});

   });




