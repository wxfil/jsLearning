
function styleElementSiblings(tag, theClass) {
  if(!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName(tag);
  for(var i = 0; i < headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    // 方式一：
    // elem.style.fontWeight = "bold";
    // elem.style.fontSize = "1.2em";
    // 方式二：
    // elem.setAttribute("class", "info;
    // 方式三：覆盖式替换样式
    // elem.className = "info";
    // 方式四：叠加式替换
    addClass(elem, theClass);
  }
}
addLoadEvent(styleElementSiblings("h1", "info"));
