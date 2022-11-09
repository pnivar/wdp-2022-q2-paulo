window.onload = function(){
  let slides = document.querySelector(".slideshow__slides").children;
  let nextSlide = document.querySelector(".slideshow__btn--right");
  let prevSlide = document.querySelector(".slideshow__btn--left");
  let totalSlides = slides.length;
  let index = 0;

  nextSlide.onclick = function () {
    next("next");
  }
  prevSlide.onclick = function () {
    next("prev");
  }

  function next(direction) {
    if(direction=="next"){
        index++;
            if(index==totalSlides){
                index=0;
            }
    } 

    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
          index--;  
        }
    }
    for(i=0; i<slides.length; i++) {
        slides[i].classList.remove("slideshow__slide--active");
      }
    slides[index].classList.add("slideshow__slide--active");
  }
  
}

