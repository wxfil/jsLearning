function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement
  || !document.createTextNode) return false;
  // get all the links in the document
  var links = document.getElementsByTagName("a");
  // create an array to store the access keys
  var akeys = new Array();
  // loop through the links
  for (var i = 0; i < links.length; i++) {
    var current_link = links[i];
    // if there is no accesskey attribute, continue the loop
    if (!current_link.getAttribute("accesskey")) continue;
    // get the value of the accesskey
    var key = current_link.getAttribute("accesskey");
    // get the value of the link text
    var text = current_link.lastChild.nodeValue;
    // add them to the array
    akeys[key] = text;
  }
  // create the list
  var list = document.createElement("ul");
  // loop through the access keys
  for (key in akeys) {
    var text = akeys[key];
    // create the string to put in the list item
    var str = key + ": " + text;
    // create the list item
    var item = document.createElement("li");
    var item_text = document.createTextNode(str);
    item.appendChild(item_text);
    // add the item to the list
    list.appendChild(item);
  }
  // create a headline
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
  // add the headerline to the body
  document.getElementsByTagName("body")[0].appendChild(header);
  // add the list to the body
  document.getElementsByTagName("body")[0].appendChild(list);
}
addLoadEvent(displayAccesskeys);