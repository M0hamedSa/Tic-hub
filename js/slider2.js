let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let actives = 0;


next.onclick = function(){
    actives = actives + 1 <= lengthItems ? actives + 1 : 0;
    reloadSliders();
}
prev.onclick = function(){
    actives = actives - 1 >= 0 ? actives - 1 : lengthItems;
    reloadSliders();
}
let refreshIntervals = setInterval(()=> {next.click()}, 3000);

function reloadSliders(){
    slider.style.left = -items[actives].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[actives].classList.add('active');

    clearInterval(refreshIntervals);
    refreshIntervals = setInterval(()=> {next.click()}, 3000);

}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        actives = key;
        reloadSliders();
    })
})
window.onresize = function(event) {
    reloadSliders();
};