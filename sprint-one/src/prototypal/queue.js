var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function(){
  var result;
  if (Object.keys(this.storage).length > 0){
    result = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
  }
  return result;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length
};

