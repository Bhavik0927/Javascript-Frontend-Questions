
const nums = [12,3,4,76];

nums.forEach((num) =>{
    console.log(num * 8);
});


const newArr = nums.forEach((num) => {
  // console.log(num * 8);
  return num * 2;
});


// console.log(nums);
// console.log(newArr);



/*

const nums1 = [12, 3, 4, 76];

const newNumsArr = nums1.map(num => num *85);
const newFilterNumsArr = nums1.filter(num => num % 2 === 0);

const newReducedNumsArr = nums1.reduce((acc,curr) =>{ return acc + curr},0);


console.log(newNumsArr);
console.log(newFilterNumsArr);
console.log(newReducedNumsArr);

*/


/*

const fruits = ["apple", "banana", "apple","Grapes","banana"];


const count = fruits.reduce((acc,fruit) =>{
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
},{});


console.log(count);

*/







