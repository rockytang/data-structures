var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var changed = false;

  _.each(bucket, function(tuple, index){
    if(tuple[0] === k){
      tuple[1] = v;
      changed = true;
    }
  });

  if(!changed) {
      bucket.push([k,v])
  }

  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;

  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      result = tuple[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(bucket === undefined) {return null}

  _.each(bucket, function(tuple, index, bucket){
    if(tuple[0] === k){
      bucket.splice(index, 1);
    }
  })

  this._storage.set(i, bucket)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
