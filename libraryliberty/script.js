(function(){
    'use strict';
    
    AOS.init({
        container: document.querySelector('.scroll'),
        once: false,
        duration: 1500,
        offset: 120
    });

})();


$( ".item" ).draggable({ 
    revert: "invalid", 
    snap: "#parent div",
    helper:"clone",
    appendTo: "body",
    zIndex: 1000
  });

$( ".receipt" ).droppable({ 
    drop: function(event, ui) {
            let droppedImage = $(ui.helper).clone();

            droppedImage.css({
                width: "70px",
                height: "60px",
                margin: "10px",
                position: "static"
            });

            $(this).append(droppedImage);

            let name = ui.draggable.data("name");

            console.log("Dropped:", name);

            $(".finalflowerlatte").css("opacity", "1");
            $(".finalheartlatte").css("opacity", "1");
   
            if (name === "flowerart"){
                $(".finalheartlatte").css("opacity", "0.3");
                $(".finalflowerlatte").css("opacity", "1");
            }

            else if (name === "heartart"){
                $(".finalflowerlatte").css("opacity", "0.3");
                $(".finalheartlatte").css("opacity", "1");
            }

            $(".finaldrink").fadeIn();
        }

  });
