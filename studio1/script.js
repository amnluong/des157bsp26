(function(){
    'use strict';
    console.log('reading js');
              
/*     const fs = document.querySelector('.fa-expand');
 */
/*     const mySection = document.querySelector('#lyrics');
 */ 
    const dazed = document.querySelector('#dazed');
    const confused = document.querySelector('#confused');
    const dayimetyou = document.querySelector('#dayimetyou');
    const lostmyhead = document.querySelector('#lostmyhead');
    const seenthelight = document.querySelector('#seenthelight');
    const aboutyou = document.querySelector('#aboutyou');
    const dazednconfused = document.querySelector('#dazednconfused');




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
        if ((1 < myVideo.currentTime && myVideo.currentTime < 3) || (24 < myVideo.currentTime && myVideo.currentTime < 25) || (27 < myVideo.currentTime && myVideo.currentTime < 28)){
            dazed.className = "showing";
        } else {
            dazed.className = "hidden";
        }

        if ((2 < myVideo.currentTime && myVideo.currentTime < 5) || (25 < myVideo.currentTime && myVideo.currentTime < 26) || (28 < myVideo.currentTime && myVideo.currentTime < 29)){
            confused.className = "showing";
        } else {
            confused.className = "hidden";
        }

         if (3.5 < myVideo.currentTime && myVideo.currentTime < 6){
            dayimetyou.className = "showing";
        } else {
            dayimetyou.className = "hidden";
        }

         if (6 < myVideo.currentTime && myVideo.currentTime < 11){
            lostmyhead.className = "showing";
        } else {
            lostmyhead.className = "hidden";
        }

         if (11 < myVideo.currentTime && myVideo.currentTime < 16){
            seenthelight.className = "showing";
        } else {
            seenthelight.className = "hidden";
        }

         if (17 < myVideo.currentTime && myVideo.currentTime < 21){
            aboutyou.className = "showing";
        } else {
            aboutyou.className = "hidden";
        }         
        
        if (21 < myVideo.currentTime && myVideo.currentTime < 23){
            dazednconfused.className = "showing";
        } else {
            dazednconfused.className = "hidden";
        }

        

        /* grayscale */
        if (2.97 < myVideo.currentTime && myVideo.currentTime < 4.5){
            myVideo.classList.add('grayscale');
        } else {
            myVideo.classList.remove('grayscale');
        }
    }


  
                
})();
