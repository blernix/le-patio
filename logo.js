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


  let lastScrollTop = 0; // Variable pour conserver la position précédente du défilement

window.addEventListener("scroll", function() {
   let currentScroll = window.scrollY; // Utilisation de window.scrollY à la place de pageYOffset
   if (currentScroll > lastScrollTop){
       // Scrollez vers le bas
       document.querySelector(".navmobil").classList.add("hidden");
   } else {
       // Scrollez vers le haut
       document.querySelector(".navmobil").classList.remove("hidden");
   }
   lastScrollTop = currentScroll; // Actualise la position du scroll sans la ternaire
}, false);

  