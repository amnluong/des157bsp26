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

                const answer = ui.draggable.attr("data-answer");
                selectedAnswers.push(answer);

                //gets og icon and question it is for and answer
                const draggedIcon = ui.draggable;
                const questionOpacity = draggedIcon.closest(".question");

                if (questionOpacity.length && !questionOpacity.hasClass("answered")) {
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
            }
        });

        //glow frame when hit submit
        document.querySelector(".submit").addEventListener("click", function(){
            document.querySelector(".picframe img").classList.add("glow-active");
        });

        //welcome overlay when loaded!!
        const overlay = document.querySelector("#ol-one");

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
                        sentences = sentences + sentence + " ";
                    }
                }
                futureResult.textContent = sentences;
            }
            picframeOverlay.classList.remove("hidden");

        });
           
        //close
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
       
        


  