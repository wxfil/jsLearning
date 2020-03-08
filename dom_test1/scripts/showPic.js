
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

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src", source);
	if(!document.getElementById("description")) return false;
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
	var description = document.getElementById("description");
  // <p>元素的文本是元素的第1个节点
	if (description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false;
}

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

function preparePlaceholder() {
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var text = document.createTextNode("Choose an image.");
	description.appendChild(text);

	// 方式1：放在body元素的最后1个节点位置
	//document.getElementsByTagName("body")[0].appendChild(placeholder);
	//document.getElementsByTagName("body")[0].appendChild(description);

	// 方式2：将元素插入gallery元素之前
	//var gallery = document.getElementById("imagegallery");
	//gallery.parentNode.insertBefore(placeholder, gallery);
	//gallery.parentNode.insertBefore(description, gallery);

	// 方式3：将元素插入gallery元素之后
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
