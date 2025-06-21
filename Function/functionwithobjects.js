function calculatecartprice(...num1){  //rest operator
return num1
}
console.log(calculatecartprice(100,200,1000))

//Output:[ 100, 200, 1000 ]

const user={
    username:"Gaurav",
    price:300
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleobject(user)

//username is Gaurav and the price is 300


//Array
const newarray=[200,300,400]
function returnseconvalue(getArray){
    return getArray[1]
}
console.log(returnseconvalue(newarray))

//Output:300