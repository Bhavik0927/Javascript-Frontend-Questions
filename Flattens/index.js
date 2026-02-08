function flatenArray(arr){
    return arr.reduce((acc,curr) =>{
        return Array.isArray(curr) ? acc.concat(flatenArray(curr)) : acc.concat(curr);
    },[])
}


const nestedArray = [1,[2, [3,4], 5],6];
const flatArray = flatenArray(nestedArray);

console.log(flatArray);