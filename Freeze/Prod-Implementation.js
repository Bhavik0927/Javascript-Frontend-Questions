
function deepFreeze(obj, seen = new WeakSet()){
    if(obj == null || typeof obj !== 'object'){
        return obj;
    }

    if(seen.has(obj)){
        return obj;
    }

    seen.add(obj);

    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach((key) =>{
        deepFreeze(obj[key], seen)
    })

    return obj;
}