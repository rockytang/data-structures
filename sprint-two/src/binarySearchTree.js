var BinarySearchTree = function(value){

  var tree = {}
  tree.value = value
  tree.left;
  tree.right;

  _.extend(tree, binaryFunctions);

  return tree;

};

var binaryFunctions = {};

binaryFunctions.insert = function(value){
  var newTree = BinarySearchTree(value)

  if(value < this.value && this.left === undefined) {
    this.left = newTree;
  } else if(value < this.value){
    this.left.insert(value)
  } else if(value > this.value && this.right === undefined) {
    this.right = newTree;
  } else if(value > this.value){
    this.right.insert(value);
  }
}


binaryFunctions.contains = function(value){

  var result = false;
  if(value === this.value){
    result = true;
  }else if (value < this.value && this.left !== undefined){
    result = this.left.contains(value)
  }else if (value > this.value && this.right !== undefined){
    result = this.right.contains(value);
  }

  return result;
}

binaryFunctions.depthFirstLog = function(iterator){

  iterator(this.value);
  if(this.left !== undefined) {
    this.left.depthFirstLog(iterator);
  }

  if(this.right !== undefined) {
    this.right.depthFirstLog(iterator);
  }


}


/*
 * Complexity: What is the time complexity of the above functions?
 */
