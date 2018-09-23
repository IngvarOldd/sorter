class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function (left, right) { 
      return left - right 
      };
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var b = [];
    for (let i = 0; i < indices.length; i++) {
      b.push(this.arr[indices[i]]);
    }
    b.sort(this.compareFunction); 
    indices.sort(function(left, right){ 
      return left - right 
    }); 
    for (let i = 0; i < indices.length; i++) {
      this.arr.splice(indices[i], 1, b[i]);     
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;