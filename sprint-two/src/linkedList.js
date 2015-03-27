var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null){
      list.head = node;
    }

    if(list.tail === null){
      list.tail = node;

    } else {
      var previousNode = list.tail;
      previousNode.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var result = list.head.value
    list.head = list.head.next
    return result

  };

  list.contains = function(target, nodeList){

    nodeList = nodeList || list.head;

    if(nodeList.value === target){
      return true;
    } else if(nodeList.next === null){
      return false;
    } else {
      return list.contains(target, nodeList.next);
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



