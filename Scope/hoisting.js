//scoping

function one(){
    const username="Gaurav"

    function two(){
        console.log(username);
        const daf="ABC"
    }
    two();
    //console.log(daf)
}
one();

//We can access one() variable value from two() but not vice versa


//hoisting


console.log(addone(1))
function addone(num1){
return num1+1;
}

//Output : 2

console.log(a(2))
const a=function(num2){
    return num2+1;
}

//Output : It will show error 