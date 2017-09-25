
$(document).ready(function(){

  var n = 0;
  var type =
//    $( "#circle" ).click(function() {
//   $( this ).addClass("animation");
// });

  $( "#circle" ).click(function() {
    $("body").addClass('bg-'+n);

    //increasements n
    n++;
    //ì n í >5, reset n
    if(n>9) {
      n=0;
    }

    if(n == 1) {
  $( this ).addClass("animation");
  
   
  //background color change.
      if($("#background").attr('style'))
    $("#background").removeAttr('style');
      // else
    $("#background").css('background', 'darkblue');
    ;
  }

if(n == 2 ) {
    $('.small-circle').addClass("small-circle_show");
    ;
  }

if(n == 3 ) {
    $('.small-circle-fast').fadeTo( "fast", Math.random());
    ;
  }

   


   // number of drops created.
// var nbDrop = 858; 

// // function to generate a random number range.
// function randRange( minNum, maxNum) {s
//   return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
// }

// // function to generate drops
// function createRain() {

// 	for( i=1;i<nbDrop;i++) {
// 	var dropLeft = randRange(0,1600);
// 	var dropTop = randRange(-1000,1400);

// 	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
// 	$('#drop'+i).css('left',dropLeft);
// 	$('#drop'+i).css('top',dropTop);
// 	}

// }
// // Make it rain
// createRain();

});



   });




