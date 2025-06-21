// global scope

let a="gaurav"
let b=2
console.log(a)

//local scope

if(true){
    let c="Arpit Rana"
    const a=5
}
console.log(c);

//it will show error because we cant access the c outside the scope bcoz it is local scope