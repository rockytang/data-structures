var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};

  obj.counter = 0;
  obj.storage = {};

  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;

  return obj;

};

var stackMethods = {};

  stackMethods.push = function(value){
    this.storage[this.counter] = value;
    this.counter++;
  };

  stackMethods.pop = function(){
    var result;

    if(this.counter > 0){
      result = this.storage[this.counter - 1];
      this.counter--;
    }

    return result;
  };

  stackMethods.size = function(){
    return this.counter;
  };


