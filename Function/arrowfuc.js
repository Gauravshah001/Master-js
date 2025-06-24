const user={
    username:"Gaurav",
    Age:23,

    WelcomeMessage:function(){
            console.log(`Welcome to the website ${this.username}`)

    }
}
user.username="Ajay"
user.WelcomeMessage()

//arrow function

// const chai=function (){
//     const user="hardik"
//     console.log(this.user)
// }
// chai();

const chai= ()=>{
    const user="hardik"
    console.log(this.user)
}
chai();

//Output:undefined


//Explicit return 
const addtwo=(num1,num2)=>{
    return num1+num2
}

//Implicit return
const addtw=(num1,num2)=>(num1+num2)
console.log(addtw(2,5))

//for objects 
const addt=()=>({ussrname:hardik})