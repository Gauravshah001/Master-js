//for all loop



let myarray=["a","b","c"]
for(const arr of myarray){
    console.log(`my objects are ${arr}`)
}

//Output:
// my objects are a
// my objects are b
// my objects are c

const greeting ="hello world"
for(const greet of greeting){
    console.log(`value is ${greet}`)
}

//Output
// value is h
// value is e
// value is l
// value is l
// value is o
// value is  
// value is w
// value is o
// value is r
// value is l
// value is d

//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"America")
map.set('PAK',"Pakistan")

console.log(map);

//Output:Map(3) { 'IN' => 'India', 'US' => 'America', 'PAK' => 'Pakistan' }


for(const [key,value] of map){
    console.log(key,"=",value)

}

//Output
// IN = India
// US = America
// PAK = Pakistan


//For objects forin loop
const Objects={
    js:"javascript",
    type:"typescript",
    py:"python"
}

for (const key in Objects) {
console.log(key)
console.log(Objects[key])

}

//Output
// js
// javascript
// type
// typescript
// py
// python

//For each loop


const coding=["js","py","ruby","html"]

coding.forEach( function(item){
console.log(item)
})

//A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Call greetUser and pass sayGoodbye as the callback
greetUser("Gaurav", sayGoodbye);
