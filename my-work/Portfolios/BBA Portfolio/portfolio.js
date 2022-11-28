window.onload = function(){

    // Header hide effect.
    const nav = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add('nav--hidden');
        } else {
            nav.classList.remove('nav--hidden');
        }

        lastScrollY = window.scrollY;
    });

    // Greetings effect.
   

    // Ressume pop up window.
    document.getElementById('download__resume').addEventListener('click', function(){
    document.querySelector('.bg__modal').style.display = 'flex';
    });

    document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.bg__modal').style.display = 'none';
    });


}