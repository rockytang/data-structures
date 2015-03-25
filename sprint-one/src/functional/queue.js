var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  //Object.keys(storage)[0];

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){

    var result;

    if(Object.keys(storage).length > 0) {
      result = storage[Object.keys(storage)[0]];
      delete storage[Object.keys(storage)[0]];
    }

    return result;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
