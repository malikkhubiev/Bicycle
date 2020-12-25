'use strict';
// Header
let Fone = document.getElementsByClassName('Fone');
let Sone = document.getElementsByClassName('Sone');
let Tone = document.getElementsByClassName('Tone');
let List = document.getElementsByClassName('section-header-list');
let Header = document.getElementsByClassName('section-header');
let Menu = document.getElementsByClassName('section-header-menu');

let menuCounter = 0;
function openMenu(){
    menuCounter++;
    if(menuCounter > 1){
        menuCounter = 0;
    }
    if(menuCounter === 0){
        Fone[0].classList.remove('FoneA');
        Sone[0].classList.remove('SoneA');
        Tone[0].classList.remove('ToneA');
        Header[0].classList.remove('HeaderA');
        List[0].classList.remove('listOpen');
        Menu[0].classList.remove('newMenu');
    }
    if(menuCounter === 1){
        Fone[0].classList.add('FoneA');
        Sone[0].classList.add('SoneA');
        Tone[0].classList.add('ToneA');
        Header[0].classList.add('HeaderA');
        List[0].classList.add('listOpen');
        Menu[0].classList.add('newMenu');
    }
}
// Scroll
$(document).ready(function() {
    $("a.section-header-list-a").click(function() {
        menuCounter = 0;
        Fone[0].classList.remove('FoneA');
        Sone[0].classList.remove('SoneA');
        Tone[0].classList.remove('ToneA');
        Header[0].classList.remove('HeaderA');
        List[0].classList.remove('listOpen');
        Menu[0].classList.remove('newMenu');
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
});
// Slider
$(document).ready(function () {
    $('.section-3-slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1
    });
});