const prev2 = document.querySelector(".prev");
const next2 = document.querySelector(".next");
const slider2 = document.querySelector(".slider-wrapper");
const innerslider2 = document.querySelector(".slider-inner");
const box = document.getElementById('box');
const dots2 = document.querySelectorAll('.login-card-L .dots li');

const directchildren2 = box.children.length;

let y;
let active = 0;



prev2.addEventListener("click", () => {
innerslider2.style.transition="1s";
clearInterval(refreshInterval);
refreshInterval = setInterval(()=> {next2.click()}, 4000);
	let innerSliderLeft = innerslider2.style.left;
	innerslider2.style.left =
	parseInt(innerSliderLeft.replace("px", "")) + 330 + "px";
	checkProbs2();
});


next2.addEventListener("click", () => {
innerslider2.style.transition="1s";
clearInterval(refreshInterval);
refreshInterval = setInterval(()=> {next2.click()}, 4000);
	let innerSliderLeft = innerslider2.style.left;
	innerslider2.style.left = innerSliderLeft.replace("px", "") - 330 + "px";
	checkProbs2();
});

const checkProbs2 = () => {
let outer = slider2.getBoundingClientRect();
let inner = innerslider2.getBoundingClientRect();

if (parseInt(innerslider2.style.left) > 0) innerslider2.style.left = "0px";
if (inner.right < outer.right)
innerslider2.style.left = `-${inner.width - outer.width - 0}px`;

if(document.querySelector('.login-card-L .dots .li2').classList.contains('active'))
{
	document.querySelector('.login-card-L .dots .li2').classList.remove('active');
	document.querySelector('.login-card-L .dots .li1').classList.add('active');
}
else{
	if(document.querySelector('.login-card-L .dots .li1').classList.contains('active'))
	{
		document.querySelector('.login-card-L .dots .li1').classList.remove('active');
		document.querySelector('.login-card-L .dots .li0').classList.add('active');
	}
}

if ((parseInt(innerslider2.style.left)) == -((directchildren2)*330))
{reloadSlider()};
};
let refreshInterval = setInterval(()=> {next2.click()}, 4000);

function reloadSlider(){
innerslider2.style.left = innerslider2.style.left = "0px"; innerslider2.style.transition= "3s";
document.querySelector('.login-card-L .dots .li0').classList.remove('active');
document.querySelector('.login-card-L .dots .li2').classList.add('active');
clearInterval(refreshInterval);
refreshInterval = setInterval(()=> {next2.click()}, 4000);
}
















