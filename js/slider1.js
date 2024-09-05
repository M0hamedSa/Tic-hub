const prev1 = document.querySelector(".mid-div-btns .prev1");
const next1 = document.querySelector(".mid-div-btns .next1");
const slider1 = document.querySelector(".slider-wrap");
const innerslider1 = document.querySelector(".slider-in");
const grayR=document.querySelector(".mid-div-btns .next1 i");
const grayL=document.querySelector(".mid-div-btns .prev1 i");

let dragged = false;
let startX;
let x;


slider1.addEventListener("mouseenter", () => {
	slider1.style.cursor = "grab";
});


slider1.addEventListener("mousemove", (e) => {
	if (!dragged) return;
	e.preventDefault();

	x = e.offsetX;

	innerslider1.style.left = `${x - startX}px`;

	checkProbs();
});
slider1.addEventListener("mouseup", () => {
	slider1.style.cursor = "grab";
	dragged = false;
});
slider1.addEventListener("mousedown", (e) => {
	dragged = true;
	startX = e.offsetX - innerslider1.offsetLeft;
	slider1.style.cursor = "grabbing";
});








slider1.addEventListener(
	"touchstart",
	(e) => {
		dragged = true;
		startX = e.targetTouches[0].clientX - innerslider1.offsetLeft;

		checkProbs();
	},
	{ passive: true }
);

slider1.addEventListener(
	"touchmove",
	(e) => {
		if (!dragged) return;
		x = e.targetTouches[0].clientX;

		innerslider1.style.left = `${x - startX}px`;

		checkProbs();
	},
	{ passive: true }
);

prev1.addEventListener("click", () => {
	let innerslider1Left = innerslider1.style.left;
	innerslider1.style.left =
		parseInt(innerslider1Left.replace("px", "")) + 265 + "px";

	checkProbs();
});

next1.addEventListener("click", () => {
	let innerslider1Left = innerslider1.style.left;
	innerslider1.style.left = innerslider1Left.replace("px", "") - 265 + "px";

	checkProbs();
});

const checkProbs = () => {
	let outer = slider1.getBoundingClientRect();
	let inner = innerslider1.getBoundingClientRect();

	next1.style.cursor="pointer";
    prev1.style.cursor="pointer";
	grayL.style.color="#ffff";
	grayR.style.color="#ffff";
	if (parseInt(innerslider1.style.left) > 0){ innerslider1.style.left = "-10px" ; grayL.style.color="gray"; prev1.style.cursor="default"};

	if (inner.right < outer.right)
		{innerslider1.style.left = `-${inner.width - outer.width - 10}px`;grayR.style.color="gray"; next1.style.cursor="default"}
};
