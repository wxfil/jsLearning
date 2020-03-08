/*
1.遍历所有abbr标签；
2.提取标签的titile/值；
3.创建dl;
4.创建dt，把dt添加到dl
5.创建dd，把dd添加到dt；
6.把dl添加到body
*/

function displayAbbreviations() {
  if(!document.getElementsByTagName) return false;
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;
  var abbr_list = document.getElementsByTagName("abbr");
  if (abbr_list.length < 1) return false;
  var dl_para = document.createElement("dl");
  for (var i = 0; i < abbr_list.length; i++) {
    // 创建定义列表&定义标题
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var dt_text = document.createTextNode(abbr_list[i].lastChild.nodeValue);
    // 这里使用lastChild是为了防止文本嵌入在其他的标签内
    var dd_text = document.createTextNode(abbr_list[i].getAttribute("title"));
    dt.appendChild(dt_text);
    dl_para.appendChild(dt);
    dd.appendChild(dd_text);
    dl_para.appendChild(dd);
  }
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  document.getElementsByTagName("body")[0].appendChild(header);
  document.getElementsByTagName("body")[0].appendChild(dl_para);
}

addLoadEvent(displayAbbreviations);
