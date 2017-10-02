
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
    if(n>21) {
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

  if(n == 4 ) {
    $('.small-circle3').fadeTo( "fast", Math.random());
    ;
  }

  if(n == 5 ) {
    $('.small-circle4').css('opacity', '1');
    ;
  }

   if(n == 6 ) {
    $('.small-circle5').css('opacity', '0.7');
    ;
  }

    if(n == 7) {
    $("#background").css('background', 'yellow');
    ;
  }
     if(n == 8) {
    $(".small-circle, .small-circle-fast, .small-circle3, .small-circle4, .small-circle5").addClass("border2");
    ;
  }

    if(n == 9) {
         $("#background").css('background', 'black');
    ;
  }

    if(n == 10) {
         $('.small-circle6').css('opacity', '1');
    ;
  }

      if(n == 11) {
         $('.small-circle7').css('opacity', '1');
    ;
  }


      if(n == 12) {
         $('.small-circle8').css('opacity', '1');
    ;
  }

      if(n == 13) {
         $('.small-circle9').css('opacity', '1');
    ;
  }

      if(n == 14) {
         $('.small-circle10').css('opacity', '1');
    ;
  }
   
      if(n == 15) {
         $('.small-circle11').css('opacity', '1');
    ;
  }

   if(n == 16) {
         $('.small-circle12').css('opacity', '1');
  }

    if(n == 17) {
         $("#background").css('background', '#02fe8a');
    ;
  }

     if(n == 18) {
         $('.small-circle13').css('opacity', '1');
  }

      if(n == 19) {
         $("#background").css('background', 'orange');
    ;
  }

     if(n == 20) {
         $('.small-circle14').css('opacity', '1');
  }

      if(n == 21) {
         $("#background").css('background', 'black');
    ;
  }

   // .css('opacity') = '0.6';


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





