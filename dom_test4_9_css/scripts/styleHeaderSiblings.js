
function styleHeaderSiblings() {
  if(!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName("h1");
  for(var i = 0; i < headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.fontSize = "1.2em";
  }
}
addLoadEvent(styleHeaderSiblings);

/* 这里是获取下一个元素节点，并非下一个节点 */
function getNextElement(node) {
  if(node.nodeType == 1){
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
