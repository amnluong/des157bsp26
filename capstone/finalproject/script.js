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


    //stores icon json
    const selectedAnswers = [];
    let futureDescriptions = {};

    async function getData() {
        const myData = await fetch('data.json');
        const data = await myData.json();

        futureDescriptions = data;
    }
    getData();



    //to drag icons
    $( ".material-symbols-outlined" ).draggable({ 
        revert: "invalid", 
        helper:"clone",
        appendTo: "body",
        zIndex: 1000,
    });

    //to drop icons
    $( ".picframe" ).droppable({
        accept: ".material-symbols-outlined",
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

                //save answer
                const answer = ui.draggable.attr("data-answer");
                selectedAnswers.push(answer);

                //gets og icon
                const draggedIcon = ui.draggable;

                //gets question it belongs to
                const questionOpacity = draggedIcon.closest(".question");

                //if question not answered 
                if (questionOpacity.length && !questionOpacity.hasClass("answered")) {

                // mark as answered
                questionOpacity.addClass("answered");

                // grey out all icons in this question
                questionOpacity.find(".material-symbols-outlined").each(function() {
                    $(this).css({
                        opacity: "0.3",
                        pointerEvents: "none",
                        cursor: "not-allowed"
                    });
                });

                // highlight the dropped icon
                draggedIcon.css({
                    opacity: "1",
                });
            }

                console.log("Dropped answer:", answer, selectedAnswers);
            }
        });

        //glow frame when hit submit
        document.querySelector(".submit").addEventListener("click", function(){
            document.querySelector(".picframe img").classList.add("glow-active");
        });

        //welcome overlay when loaded!!
        const overlay = document.querySelector("#ol-one");
/*         const closeBtn = document.querySelector(".close"); */

        overlay.classList.remove("hidden");

        document.querySelectorAll(".close").forEach(function(button) {
            button.addEventListener("click", function() {
                button.closest(".overlay").classList.add("hidden");
            });
        });


    

        //overlay of frame results
        const picframeOverlay = document.querySelector("#picframeoverlay");
        const picframe = document.querySelector(".picframe");
        const picframeClose = picframeOverlay.querySelector(".close");
        const futureResult = document.querySelector("#future-result");


        picframe.addEventListener("click", function() {
            if(selectedAnswers.length === 0){
                futureResult.textContent = "You haven't answered any questions yet! Drag and drop the icons to the picture frame to choose your answers."
            } else {
                let sentences = "";
                for (let i = 0; i < selectedAnswers.length; i++) {
                    const answer = selectedAnswers[i];
                    const sentence = futureDescriptions[answer];
                    if (sentence){
                        sentences = sentences + sentence + "";
                    }
                }
                futureResult.textContent = sentences;
            }
            picframeOverlay.classList.remove("hidden");

        });
           
 
picframeClose.addEventListener("click", function(event) {
    event.stopPropagation();
    picframeOverlay.classList.add("hidden");
});



        // popup for icons 
        document.addEventListener("DOMContentLoaded", function(){
             tippy('.material-symbols-outlined', {
            content: (reference) => reference.getAttribute('data-answer'),
            placement: 'bottom',
            animation: 'shift-toward',
        });

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
       
        


  