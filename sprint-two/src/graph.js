

var Graph = function(){
  this.storage = {};
  this.edges = [];

};

Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

Graph.prototype.contains = function(node){
  if(this.storage.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
  //don't forget to delete the edge
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    var comparison1 = (this.edges[i][0] === fromNode) && (this.edges[i][1] === toNode);
    var comparison2 = (this.edges[i][1] === fromNode) && (this.edges[i][0] === toNode);
    if(comparison1 || comparison2){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
      this.edges.splice(i,1);
    }
  }
};

Graph.prototype.forEachNode = function(iterator){
  for (var prop in this.storage){
    iterator(this.storage[prop], prop, this.storage)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



