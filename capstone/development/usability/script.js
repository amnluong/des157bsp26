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



        //overlay when loaded!!
        const overlay = document. getElementById("ol-one");
        const closeBtn = document.querySelector(".close");

        //show
        overlay.classList.remove("hidden");

        //close
        closeBtn.addEventListener("click", function(){
            overlay.classList.add("hidden");
        })


        //overlay of frame results
        const picframeOverlay = document.getElementById("picframeoverlay");
        const picframe = document.querySelector(".picframe");
        const picframeClose = picframeOverlay.querySelector(".close");

        //show
        picframe.addEventListener("click", function(){
            picframeOverlay.classList.remove("hidden");
        });

        //close
        picframeClose.addEventListener("click", function(){
            event.stopPropagation();
            picframeOverlay.classList.add("hidden");
        });


    //gsap 

    /* window.addEventListener("load", () => {
         gsap.registerPlugin(SplitText);

        // the target can be selector text, an element, or an Array of elements
        //splitting text
        let split = SplitText.create(".text", {
            type: "chars, words, lines",
            wordsClass: "word"
        });

        gsap.set(split.chars, {
             y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 0.01, 
            opacity: 0
    });

        gsap.set(split.chars, {
                y: 100,
                autoAlpha: 0,
                duration: 0.01, 
                opacity: 1,
                stagger: 0.05,

        });

    SplitText.create(); */
       
        


  