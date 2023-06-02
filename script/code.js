// let numbers = [12, 15]
// console.log("length:", numbers.length);
// console.log("numbers:", numbers);

// numbers.push(8);
// numbers.push(6);
// console.log("After push()", numbers);
// console.log("length:", numbers.length);

// numbers.pop()
// console.log("After pop()",numbers);

// numbers.shift();
// console.log("After shift():", numbers);
// numbers.unshift(14, 19);
// console.log("After unshift():", numbers);

// const firstTwo = numbers.slice(0,2);
// console.log(firstTwo);
// console.log(numbers);

// numbers.splice(3,0,2)
// console.log("After splice():", numbers)

// // Find a Primitive Element
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] !=2)
//     console.log(numbers[i])
// }

// console.log(numbers.filter(i => i == 2));
// numbers.filter((value, i)=>{
//     if(value == 2)
//     console.log(i, value);
// });

// console.log("indexOf():",numbers.indexOf(18));
// const secArr = [11, 10]
// console.log("concat():", numbers.concat(secArr))
// console.log("join():", numbers.join("-"))

// let myArr = new Array();
// let myArr2 = new Array(4).fill("*");
// console.log("fill()", myArr2);
// console.log("Check if all elements are even numbers?",numbers.every((value)=>{
//     return value % 2 == 0
// }))
// console.log("Check if some elements are even numbers?", numbers.some((value)=>{
//     return value % 2 == 0
// }))
// console.log("Try to find number 2:", numbers.find(value => {
//     return value == 19
// }))
// console.log("findIndex():",numbers.findIndex( value => value == 18))
// console.log("includes():", numbers.includes(2))
// console.log("reduce():", numbers.reduce((a,b)=> a+b))
// console.log("reduceRight():", numbers.reduceRight((a,b)=> a+b))
// console.log("sort():",numbers.sort());
// console.log("reverse():", numbers.reverse())

// let data = [3, "Siya", 7];
// let addition = data.filter( d => {
//     return Number.isInteger(d)
// }).reduce((a, b)=> {return a +b})
// console.log(addition)


const addName = document.querySelector('load');
const displayName = document.querySelector('show')
const screenInput = document.querySelector('#names')
const output = document.querySelector('display')
const namelist = []

addName.addEventListener("click", (e)=>{
    e.preventDefault()
    if(displayName.value) {
        namelist.push(displayName.value)
        displayName.value = ""
    }else {
        displayName.style = "outline: 3px solid blue;"
    }
})