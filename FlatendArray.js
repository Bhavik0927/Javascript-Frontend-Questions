
function flatendArray(arr){

    const result = [];

    for(let element of arr){

        if(Array.isArray(element)){
            result.push(...flatendArray(element))
        }else{
            result.push(element);
        }
    }

    return result;
}


const nested = [1, [2, [3, [4, 5]]], 6];

console.log(flatendArray(nested));