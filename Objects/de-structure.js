//Object de-structure

const course={
    coursename:"Master Js",
    courseprice:200,
    courseIntructor:"Gaurav Shah"
}
const {courseIntructor:instructor}=course
console.log(instructor);

//instructor here refers to a courseIntructor
//Output:Gaurav Shah  

//API 