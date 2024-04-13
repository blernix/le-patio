document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.content').classList.remove('blurred');
    }, 30); // Après 3 secondes, le logo disparaît et le flou est retiré.
});




$(document).ready(function() {
  
    $('button').on('click', function() {
      if($(this).hasClass('nav-button')) {
        $('nav div').addClass('show');
      } else if($(this).hasClass('exit-menu')) {
        $('nav div').removeClass('show');
      } 
      else if($(this).hasClass('to-top')) {
        $('html,body').animate({scrollTop:0}, 'slow');
      }
    });
  
    AOS.init({      
          duration: 1800,
      easing: 'ease'
    });
     
  })