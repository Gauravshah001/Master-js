// Imediately Invoked Function Expression (IIFE)


//function immediately execute
// to remove global scope pollution ............


(function chai(){
    console.log(`db connected`)
})();

( (name)=>{
 console.log(`db connected ${name}`);
})('hitesh')


//Javascript execution context
//global execution context  {} this..
//functional execution context
//Eval Execution eontext

