//Eentendiendo el metodo map
/* const nums = [1,2,3,4,5]
const newNums = [];

for(let i=0; i<nums.length; i++){
    newNums.push(nums[i]*2);
}

console.log({newNums}); */

const nums = [1,2,3,4,5]
//funcion pura
const double = ( num) => {
    return num*2;
}

const newNums = nums.map(double);
//ma, devuelve una nueva matriz, no cambia el riginal en este caso el nums[]
console.log(newNums);

//Ver map en React => Groceries.js

const array1 = [1,4,9,16];
const map1 = array1.map((x)=> x*2);
console.log({map1});

const numbers = [1,4,9];
const roots = numbers.map((num)=> Math.sqrt(num));
console.log({roots});

let kvArray = [
    {key: 1, value:10},
    {key: 2, value:20},
    {key: 3, value:30},
]

const newArrays = kvArray.map((obj) => {
    let newObj = {};
    newObj[obj.key] = obj.value;
    return newObj;
})

console.log(newArrays);