function addtwonumber(number1,number2){  //parameter
    console.log(number1+number2)
}
addtwonumber(2,2)  //4
addtwonumber(2,5)  //7
addtwonumber(0,2)  //2  Arguments



function subtractnumber(n1,n2){
    let result=n1-n2;
    return result;
}
const result=subtractnumber(2,3)
console.log(result)

//Output :-1

function loginuser(username){
    if(username === undefined){
        console.log("enter the name")
        return
    }
    
    return `${username} welcome to ABC `
}
console.log(loginuser("Abhishek"))

//Output:Abhishek welcome to ABC 