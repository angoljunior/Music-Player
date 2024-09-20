const Progress   = document.getElementById("progress"),
      Song      = document.getElementById("song"),
      playIcon  = document.getElementById("play")


    
      Song.onloadeddata = function(){
        Progress.max =Song.duration;
        Progress.value = Song.currentTime;
      }


      function playPause(){
        if(playIcon.classList.contains("fa-pause")){
            Song.pause();
            playIcon.classList.remove("fa-pause")
            playIcon.classList.add("fa-play")
        }
        
        else{
            Song.play();
            playIcon.classList.remove("fa-play")
            playIcon.classList.add("fa-pause")
        }
      }

      if(Song.play()){
        setInterval(() =>{
            Progress.value = Song.currentTime;
        },500);
      }

      Progress.onchange =function (){
        Song.play();
        Song.currentTime = Progress.value;
        playIcon.classList.remove("fa-pause")
        playIcon.classList.add("fa-play")
      }

