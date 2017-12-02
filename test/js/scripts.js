
$(document).ready(function(){

  $('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
  var scrollorama = $.scrollorama({
    blocks:'.curtains'
  });
    

      scrollorama.animate('.background1',{
      delay:0, duration:500, property:'left', start:-2.5, end:-1500
    });
    
    scrollorama.animate('.background2',{
      delay:0, duration:500, property:'left', start:-2.5, end:1500
    });

  

    scrollorama.animate('.blurry',{
      delay:0, duration:400, property:'opacity', start:0, end:1
    });

       scrollorama.animate('.jeffwall',{
      delay:400, duration:1000, property:'bottom', start:-500, end:100
    });
 
    //   scrollorama.animate('.blurry',{ duration:500, property:'padding-top', start:200, pin:true 
    // });

    scrollorama.animate('.introtext',{
      delay:800, duration:1000, property:'bottom', start:-1400, end:100
    });

      scrollorama.animate('.fadein',{ delay:1500, duration: 1300, property:'opacity', start:0, end:1
    });

      scrollorama.animate('.fadein',{ delay:1500, duration: 1300, property:'letter-spacing', start:18 
    });



      scrollorama.animate('.unpin',{ duration:800, property:'padding-top', start:700, pin:false 
    });

      scrollorama.animate('.fadeout',{ duration:1500, property:'opacity', start:800, pin:false 
    });

      scrollorama.animate('.goaway',{ duration:3000, property:'opacity', start:900, pin:false 
    });

      scrollorama.animate('.blockjeff',{ duration:3000, property:'opacity', start:900, pin:false 
    });

      scrollorama.animate('.box1',{
      delay:2200, duration:2000, property:'bottom', start:-1400, end:250
    });


      scrollorama.animate('.box2',{
      delay:2400, duration:2000, property:'bottom', start:-1400, end:250
    });

    //   scrollorama.animate('.box2',{
    //   delay:2500, duration:2000, property:'bottom', start:-1400, end:450
    // });
    //   scrollorama.animate('.box1',{
    //   delay:2400, duration:2000, property:'opacity', start:150, pin:false
    // });





//click start//



  
    
    scrollorama.animate('.plane',{
      delay:7600, duration:993, property:'left', start:-1500, end:-100
    });
     
    scrollorama.animate('.cloud',{
      delay:6000, duration:993, property:'left', start:-600, end:500
    });

     scrollorama.animate('.back2',{
      delay:7200, duration:993, property:'opacity', start:0, end:1
    });
     
     
     
     scrollorama.animate('.whaam',{
      delay:8400, duration:293, property:'right', start:-1500, end:400
    });

     scrollorama.animate('.aboutartist',{
      delay:9188, duration:700, property:'bottom', start:0, end:700
    });

     scrollorama.animate('.hand1',{
      delay:11000, duration:1093, property:'left', start:-800, end:-10
    });

     scrollorama.animate('.hand2',{
      delay:11000, duration:1093, property:'right', start:-800, end:-10
    });
    
   
    
    scrollorama.animate('.exhibitiontag',{
      delay:12230, duration:993, property:'bottom', start:0, end:993
    });

     scrollorama.animate('.bullet',{
      delay:14030, duration:2093, property:'zoom', start:0.04, end:1.5
    });

     scrollorama.animate('.varoom',{
      delay:14130, duration:93, property:'zoom', start:0, end:1
    });

     scrollorama.animate('.varoom',{
      delay:14180, duration:93, property:'opacity', start:1, end:0
    });

      scrollorama.animate('.artworkused',{
      delay:16000, duration:900, property:'bottom', start:0, end:900
    });

scrollorama.animate('.credit',{
      delay:17700, duration:100, property:'bottom', start:-200, end:-50
    });

    

      $(".arrow").click(function(){

        $("html, body"). animate({

          scrollTop: $(".box1").offset().top

        },1000);
    })
 
    });
   





   

   





        
