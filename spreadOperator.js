let array= [23, 23, 45, 88,]
// console.log(array) //[ 23, 23, 45, 88 ]
// console.log(...array)//23 23 45 88 it's a spread operator
// console.log([...array]) //[ 23, 23, 45, 88 ] it will be convert aray again 

const arr1 = [23, 98,55, 54]
// const arr2 = arr1 // it means we just clone the arr as an arr2
const arr2 = [40 ] //applying spread operator [ 23, 98, 55, 54 ] it not showing 40 so now i need to concate the spread operator so now i have to do that create a new variable and put whatever number i wantr to add  and then call the two variable in abother variable with spread operator and now console the last var name
const arr3 =[...arr1, ...arr2]

// arr1.push(40)
console.log(arr3)
