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
