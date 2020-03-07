
function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		/* 存在的问题：Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
		   解决方法：将谷歌浏览器在桌面创建快捷方式；右击-属性-快捷方式-目标；后面添加 --allow-file-access-from-files；
		   注：点击快捷方式打开浏览器，再浏览网页。
		*/
		request.open( "GET", "example.txt", true );
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);				
			}
		};
		request.send(null);
	} else {
		alert("Sorry, your browser doesn\'t support XMLHttpRequest!");
	}
}

addLoadEvent(getNewContent);