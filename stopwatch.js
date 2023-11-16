window.onload = function () {
  
    var minutes=0;
    var seconds = 0; 
    var mseconds = 0; 
    var appendMseconds = document.getElementById("msec")
    var appendSeconds = document.getElementById("sec")
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var appendMinutes= document.getElementById('min');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
      clearInterval(Interval);
      mseconds = "00";
      seconds = "00";
      minutes="00";
      appendMseconds.innerHTML = mseconds;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerText = minutes;
    }
    
     
    
    function startTimer () {
      mseconds++; 
      
      if(mseconds <= 9){
        appendMseconds.innerHTML = "0" + mseconds;
      }
      
      if (mseconds > 9){
        appendMseconds.innerHTML = mseconds;
        
      } 
      
      if (mseconds > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        mseconds = 0;
        appendMseconds.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }


      if (seconds > 59){
        minutes++;
        if (minutes < 9){
          appendMinutes.innerText = '0'+ minutes;
          seconds=0;
        }
        else{
          appendMinutes.innerText=minutes;
          seconds=0
        }
        
        

      }
    
    }
    
  
  }