 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
  // <div id="player"></div>
     videoId: 'An6LvWQuj_8',
     // 재생할 유튜브 영상의 아이디
     playerVars: {
       autoplay: true,
       loop: true,
       playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 아이디
     },
     events: {
       onReady: function (event) {
      // 준비가되면 함수를 실행
        event.target.mute() //.target 재생되고 있는 영상 의미
       }
     }
   });
 }