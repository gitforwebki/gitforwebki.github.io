var img = document.getElementById("bg-fam");
var circle = document.getElementById("course-circle");
var circle_d = document.getElementById("course-circle-d");
var hacker = document.getElementById("hacker");
var appear = false;

SetUnfixed();
Compute();

window.onresize = function() {Compute()};
window.onscroll = function() {Onscroll()};

function SetUnfixed() {
	var bottom = img.getBoundingClientRect().bottom;
	if(bottom <= document.documentElement.clientHeight) {
		circle.style.display = "none";
		circle_d.style.display = "inline";
		circle.style.animation = "none";
	}
	else {
		circle.style.display = "inline";
		circle_d.style.display = "none";
	}
}

function Compute() {
	circle.style.top = (document.documentElement.clientHeight - 500) / 2 + 25 + "px";
	circle.style.right = (document.documentElement.clientWidth - 500) / 2 + "px";
	circle_d.style.marginTop = img.getBoundingClientRect().height + 25 - 500 - (document.documentElement.clientHeight - 500) / 2 + "px";
	circle_d.style.marginLeft = (document.documentElement.clientWidth - 500) / 2 + "px";
}

function HackerApp () {
	bottom = hacker.getBoundingClientRect().bottom - document.documentElement.clientHeight;
	console.log(bottom);
	if(!appear)
	{
		if(bottom <= 0) {
			hacker.classList.toggle("hacker-anim");
			appear = true;
		}
	}
}

function Onscroll() {
	SetUnfixed();
	HackerApp();
}