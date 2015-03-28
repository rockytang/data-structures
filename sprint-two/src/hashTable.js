var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);


  var bucket = this._storage.get(index) || [];
  var changed = false;
  for(var i = 0; i < bucket.length; i ++){
    if(bucket[i][0] === k ){
      bucket[i][1] = v;
      changed = true;
    }
  }
  if(!changed) {
      bucket.push([k,v])
  }


  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //.get on i
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

  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k) {
      bucket[j][1] = null;
    }
  }
  this._storage.set(i, bucket)

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
