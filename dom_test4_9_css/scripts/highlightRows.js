function highlightRows() {
  if(!document.getElementsByTagName) return false;
  var raws = document.getElementsByTagName("tr");
  for (var i = 0; i < raws.length; i++) {
    raws[i].onmouseover = function() {
      this.style.fontWeight = "bold";
    }
    raws[i].onmouseout = function() {
      this.style.fontWeight = "normal";
    }
  }
}

addLoadEvent(highlightRows);
