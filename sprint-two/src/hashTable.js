var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // i is the key to ._storage
  // we need to SET ._storage[i] = [[k,v]] for the first iteration
  // if ._storage[i][0] === an array, then we need to SET ._storage[i][0].push([k,v])
  // debugger
  // if(this._storage[i] === undefined){
    this._storage.set(i, [[k,v]]);
  // } else {
    // this._storage.set(i, [k,v]);
  // }
    // this._storage.set(i, v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //.get on i
  debugger;
  // make storage = return value of .get(i)   --> this returns the bucket and lets us play with it
  // make for loop that iterates through each tupil of the bucket until we find one that matches k
  // return value
  var bucket = this._storage.get(i);

  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k) {
      return bucket[i][1];
    }
  }



};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null)

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
