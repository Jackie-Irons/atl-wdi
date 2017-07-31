// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

vvar timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
    var numericDisplay = document.getElementById('numeric-display');
     numericDisplay.textContent = timerValue;
     if (timerValue <= 10) {
      numericDisplay.style.color = 'red';
       var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontSize = newSize + 'em';
     }
  },
  drawProgressBars: function(timerValue){
    var progress = 100 - timerValue;
     var bars = document.getElementsByClassName('progress-bar');
      for (var i = 0; i < bars.length; i++) {
      bars[i].style.width = progress + '%';
     }
  },
  

   // Your Code Here
  drawLitFuses: function(timerValue){
     // Your Code Here
  },
  drawCrawlers: function(timerValue){
    
}; // Your Code Here

