/* (function(){
    'use strict';
    
    AOS.init();

})(); */


(function(){
    'use strict';

    // for granim.js gradient 
    /* window.addEventListener("load", function(){

    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#c9e8ff', '#b9f0d7'],
                    ['#b9f0d7', '#b8baff'],
                    ['#b8baff', '#c9e8ff']
                ]
            }
        }
    });
    }); */
    
    AOS.init({
        container: document.querySelector('.scroll'),
        once: false,
        duration: 1500,
        offset: 120
    });

})();


$( ".sticker" ).draggable({ 
    revert: "invalid", 
/*     snap: "#parent div",
 */    
    helper:"clone",
    appendTo: "body",
    zIndex: 1000
  });

$( ".picframe" ).droppable({
    accept: ".sticker",
    tolerance: "fit", 
    drop: function(event, ui) {
            let droppedSticker = $(ui.helper).clone();

            droppedSticker.css({
                position: "absolute",
                top: ui.position.top - $(this).offset().top,
                left: ui.position.left - $(this).offset().left,
                margin: 0
            });

            $(this).append(droppedSticker);
        }

        
  });

  