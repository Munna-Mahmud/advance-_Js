function sum(name, ...argu){
// console.log(arguments) // arguments is a funtion that create  an object
console.log(`${name} : `)
let sum=0

for(let i in argu){
    sum += argu[i]
}
console.log(sum) // it will be return 90 70 like jog kore dibe 
}
// sum( 30, 40, 20) //[Arguments] { '0': 30, '1': 40, '2': 20 }
// sum( 30, 40) //[Arguments] { '0': 30, '1': 40 

sum("Sam Number", 30, 40, 20)
sum('Munna Number', 30, 40) // it just return a string that is why we use  es6 rest operator 


// for gun er khtrre
function multi(roll, ...Number){
    // console.log(Number)
    console.log(`${roll}: `)
    let multi=1
    for( let i in Number){
         multi *= Number[i]
    }
    console.log(multi)
}
multi("Math Number", 5, 5, 2)

