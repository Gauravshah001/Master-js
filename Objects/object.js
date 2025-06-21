
//Objects 

const user= {}
user.id="1BC"
user.name="Gaurav Shah"
user.jobtitle="Software Developer"
console.log(user);


//Output : { id: '1BC', name: 'Gaurav Shah', jobtitle: 'Software Developer' }

console.log(Object.keys(user))

//Output:[ 'id', 'name', 'jobtitle' ]

console.log(Object.values(user))

//Output:[ '1BC', 'Gaurav Shah', 'Software Developer' ] 

const regularuser={
    email:"mailtogauravshah@gmail.com",
    full_name:{
        userfirstname:"Gaurav",
        userlastname:"Shah"
    }
}
console.log(regularuser.full_name)

//Output : { userfirstname: 'Gaurav', userlastname: 'Shah' }

const obj1={1:"a" , 2:"b"}
const obj2={3:"c" , 4:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

//we can also use 
const obj4={...obj1,...obj2}
console.log(obj4)

// Output : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//{} refers to a target and obj1 and obj2 a source

const dbuser=[{
    user:"Gaurav",
    id:1
},{
    designation:"Manager",
    Employee_code:231
}]

console.log(dbuser)

/*Output:[
  { user: 'Gaurav', id: 1 },
  { designation: 'Manager', Employee_code: 231 }
]*/


