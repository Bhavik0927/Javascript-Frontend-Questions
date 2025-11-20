
// Create Map Polyfill

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisArg){
        if(typeof callback !== 'function'){
            throw new TypeError(callback + 'is not a function')
        }
    }

    let result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callback.call(thisArg, this[i], i, this))
    }

    return result;
}