/*
  SmallLib — mini library for simple work with js (my bicycle)
*/


// Remove element from array

Array.prototype.remove = function(value) {
  var idx = this.indexOf(value); // index необходимого элемента
  if (idx != -1) {
    return this.splice(idx, 1);
  }
  return false;
};