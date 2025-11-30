// Create Map Polyfill

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + "is not a function");
    }

    let result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }

    return result;
  };
}



const arr = [12,232,4,5,2222,9];

const newArr = arr.myMap(arr);

console.log(newArr);
