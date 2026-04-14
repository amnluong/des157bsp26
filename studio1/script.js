(function(){
    'use strict';
    console.log('reading js');
              
/*     const fs = document.querySelector('.fa-expand');
 */
/*     const mySection = document.querySelector('#lyrics');
 */    const dazed = document.querySelector('#dazed');
    const confused = document.querySelector('#confused');
    const dayimetyou = document.querySelector('#dayimetyou');


/*     const pic = document.querySelector('#pic');
 */
    const myVideo = document.getElementById('myVideo');
    const intervalID = setInterval(checkTime, 1000);

/*     fs.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
 */

    function checkTime(){
        if (1 < myVideo.currentTime && myVideo.currentTime < 3){
            dazed.className = "showing";
        } else {
            dazed.className = "hidden";
        }

        if (2 < myVideo.currentTime && myVideo.currentTime < 5){
            confused.className = "showing";
        } else {
            confused.className = "hidden";
        }

         if (4 < myVideo.currentTime && myVideo.currentTime < 6){
            dayimetyou.className = "showing";
        } else {
            dayimetyou.className = "hidden";
        }


        /* grayscale */
        if (2.97 < myVideo.currentTime && myVideo.currentTime < 4.5){
            myVideo.classList.add('grayscale');
        } else {
            myVideo.classList.remove('grayscale');
        }
    }


  
                
})();
