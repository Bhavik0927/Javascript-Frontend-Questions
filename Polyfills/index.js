
if (!Promise.myAll) {
    Promise.myAll = function (iterable) {

        return new Promise((resolve, reject) => {
            const results = [];
            let completed = 0;
            let index = 0;

            for (let item of iterable) {
                const currentIndex = index;
                index++;

                Promise.resolve(item).then((value) => {
                    results[currentIndex] = value;
                    completed++;

                    if (completed === index) { resolve(results) }
                }).catch(reject);
            }

            if (index === 0) { resolve([]) }
        })
    }
}

const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 1000));
const p3 = 30;

Promise.myAll([p1, p2, p3]).then(console.log).catch(console.error);



// Array.map();



const arr = [12, 4, 45, 6, 777, 23];

arr.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result;
}



// filter Polyfills

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (cb, thisArg) {
        if (typeof cb !== "function") {
            throw new TypeError("Callback is not present");
        }

        let result = [];
        for (let i = 0; i < this.length; i++) {

            if (i in this) {
                if (cb.call(thisArg, this[i], i, this)) {
                    result.push(this[i]);
                }

            }

        }

        return result;
    }
}



// Reducer Polyfill

if(!Array.prototype.My_reducer){
    Array.prototype.My_reducer = function(cb, intialValue){
        if(typeof cb === 'function'){
            throw new TypeError("It's not an function...!!")
        }

        let hasInitialValue = arguments.length > 0;

        if(!hasInitialValue && this.length === 0){
            throw new TypeError("It's not be a empty value");
        }

        let init_value = hasInitialValue ? intialValue : this[0];
        let start_value = hasInitialValue ? 0 : 1;

        let accumulator = init_value;

        for(let i = start_value; i< this.length; i++){
            if(i in this){
                accumulator = cb(accumulator, this[i], i, this)
            }
        }

        return accumulator;
    }
}