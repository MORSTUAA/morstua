if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"M|",
					"M |",
					"M o|",
					"M o |",
					"M o r|",
					"M o r |",
					"M o r s|",
					"M o r s |",
					"M o r s |",
					"M o r s  |",	];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}