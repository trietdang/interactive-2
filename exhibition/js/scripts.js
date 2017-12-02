
var controller = new ScrollMagic.Controller();

$(document).ready(function(){

  var scene = new ScrollMagic.Scene({triggerElement: "#background1"})
            .setPin("background1")
            .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);


   
});

        
