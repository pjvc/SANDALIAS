const slider = document.querySelector('div.slider')
const slider_section = document.querySelectorAll('div.slider_section')
const slider_section_last = slider_section[slider_section.length - 1];

const btn_right = document.querySelector('#btn_right')
const btn_left = document.querySelector('#btn_left')

slider.insertAdjacentElement('afterbegin', slider_section_last)

function Next() {
    let sliderSectionFirst = document.querySelectorAll('div.slider_section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "-100%";
    },500);
}
function Prev() {
    const slider_section = document.querySelectorAll('div.slider_section')
    const slider_section_last = slider_section[slider_section.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slider_section_last)
        slider.style.marginLeft = "-100%";
    },500);
}


btn_right.addEventListener('click',function(){
    Next();
});

btn_left.addEventListener('click', function(){
    Prev();
})
setInterval(function(){
    Next();
},5000);