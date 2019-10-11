var blank = document.getElementById("contact-blank");
var cnts = document.getElementsByClassName("contact");
var msgs = document.getElementsByClassName("message");
var mss = document.getElementById("messages");
var enter = document.getElementById("m-enter");

SetBlankHeight();
//SetMessagesWidth();
SetEnterPos();

window.onresize = function() {Resize()};

function SetBlankHeight() {
	blank.style.height = document.documentElement.clientHeight - cnts[cnts.length-1].getBoundingClientRect().bottom + "px";
}

/*function SetMessagesWidth() {
	for(var i = 0; i < msgs.length; i++)
	{
		var mssw = mss.getBoundingClientRect().width;
		var msgw = msgs[i].getBoundingClientRect().width;
		if(msgw > mssw/2 - 50)
			msgs[i].style.width = mssw/2 - 50 + "px";
		if(msgw < mssw/4 - 50)
			console.log(msgs.length);
			msgs[i].style.width = mssw/4 - 50 + "px";
	}
}*/

function SetEnterPos() {
	enter.style.marginTop = document.documentElement.clientHeight - msgs[msgs.length-1].getBoundingClientRect().bottom - enter.getBoundingClientRect().height + "px";
}

function Resize() {
	SetBlankHeight();
	SetEnterPos();
}