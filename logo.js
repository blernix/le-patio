document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.content').classList.remove('blurred');
    }, 3000); // Après 3 secondes, le logo disparaît et le flou est retiré.
});
