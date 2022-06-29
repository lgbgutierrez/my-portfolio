document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "I'm currently working as a Pod Leader.", "I use design tools such as XD everyday.", "My allies are html, css/sass and javascript.", "I'm interested in learning frameworks such as React.", "I'm a Front-End Web Developer."];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("h2").innerHTML = text.substring(0, i+1) + '<span></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }

      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });
