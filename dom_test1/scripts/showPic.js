
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src", source);
	if(!document.getElementById("description")) return false;
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";	
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}	
	return false;
}

//window.onload = prepareGallery;
function prepareGallery() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	var imagegallery = document.getElementById("imagegallery");
	var links = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
		}
	}
}

addLoadEvent(prepareGallery);
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}