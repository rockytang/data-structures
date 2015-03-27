var Tree = function(value){
  var newTree = {};
  //sets the value to a new tree
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = Tree(value)
  this.children.push(subTree);
};

treeMethods.contains = function(target, subTrees){
  //for loop, that runs through 2 elements in an array
  subTrees = subTrees || this.children;
  debugger;
  var result;
  for(var i = 0; i < subTrees.length; i++){
    if (target === subTrees[i].value){
      return true;
    }else{
      if(subTrees[i].children.length > 0 ) {

        result = this.contains(target, subTrees[i].children)

      }else {

        result = false
      }
    }

    return result;

  }
  //somewhere, see if children has children, and call .contains on its child


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
