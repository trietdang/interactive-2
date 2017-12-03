
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

    //   scrollorama.animate('.fadein',{ delay:1500, duration: 1300, property:'opacity', start:0, end:1
    // });

    //   scrollorama.animate('.fadein',{ delay:1500, duration: 1300, property:'letter-spacing', start:18 
    // });



      scrollorama.animate('.unpin',{ duration:800, property:'padding-top', start:700, pin:false 
    });

      scrollorama.animate('.fadeout',{ duration:1500, property:'opacity', start:800, pin:false 
    });

      scrollorama.animate('.goaway',{ duration:3000, property:'opacity', start:900, pin:false 
    });

      scrollorama.animate('.blockjeff',{ duration:3000, property:'opacity', start:900, pin:false 
    });

      scrollorama.animate('.box1',{
      delay:2200, duration:5000, property:'bottom', start:-1400, end:250
    });


      scrollorama.animate('.box2',{
      delay:2400, duration:4000, property:'bottom', start:-1400, end:200
    });


      scrollorama.animate('.box3',{
      delay:2800, duration:4500, property:'bottom', start:-1400, end:550
    });


      scrollorama.animate('.introwork',{
      delay:2800, duration:2500, property:'left', start: -2200, end: 500
    });

      scrollorama.animate('.introworkgone',{ 
      delay: 3200, duration:5000, property:'opacity', start: 500, pin:false
    });

      scrollorama.animate('.box4',{
      delay:6000, duration:4500, property:'bottom', start:-1400, end:550
    });

      scrollorama.animate('.box5',{
      delay:6200, duration:4500, property:'bottom', start:-1400, end:100
    });

      scrollorama.animate('.box6',{
      delay:6500, duration:4500, property:'bottom', start:-1400, end:200
    });

      scrollorama.animate('.boxgone',{ 
      delay: 7000, duration:6000, property:'opacity', start: 500, pin:false
    });




    //   scrollorama.animate('.box2',{
    //   delay:2500, duration:2000, property:'bottom', start:-1400, end:450
    // });
    //   scrollorama.animate('.box1',{
    //   delay:2400, duration:2000, property:'opacity', start:150, pin:false
    // });


    scrollorama.animate('.background3',{
      delay:10000, duration:2000, property:'left', start:-2.5, end:-1500
    });
    
    scrollorama.animate('.background4',{
      delay:10000, duration:2000, property:'left', start:-2.5, end:1500
    });




//click start//








    

      $(".arrow").click(function(){

        $("html, body"). animate({

          scrollTop: $(".box1").offset().top

        },1000);
    })
 
    });
   




  $(document).ready(function(){

      $(".home").click(function(){

        $("html, body"). animate({

          scrollTop: $(".hiden").offset().top

        },1000);

      })

      $(".about").click(function(){

        $("html, body"). animate({

          scrollTop: $(".hiden1").offset().top

        },1000);

      })

      $(".works").click(function(){

        $("html, body"). animate({

          scrollTop: $(".hiden2").offset().top

        },1000);

      })

      $(".events").click(function(){

        $("html, body"). animate({

          scrollTop: $(".hiden3").offset().top

        },1000);

      })

      $(".sfmoma").click(function(){

        $("html, body"). animate({

          scrollTop: $(".hiden4").offset().top

        },1000);

      })

    });
   

   





        
