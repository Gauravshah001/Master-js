const coding=["c++","java","python","ruby","rust"]

const values=coding.forEach((item)=>{
console.log(item)
return item
})
console.log(values)

//Output
// c++
// java
// python
// ruby
// rust
// undefined

//filter
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num>4)
console.log(newNums)

//Output:[ 5, 6, 7, 8, 9, 10 ]

const nu=[1,2,3,4,5,6,7,8,9,10]

const numv=nu.map((num)=>num+10)
console.log(numv)

//Output : [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


//reduce


const mynums=[1,2]
const mytotal=mynums.reduce(function(acc,currval){
    console.log(`${acc} and the crrval ${currval}`)
    return acc+ currval
},0) 
console.log(mytotal)


//Output
// 0 and the crrval 1
// 1 and the crrval 2
// 3


const shoppingcart=[
    {
    itemname:"js course",
    price:2999
},
  {
    itemname:"py course",
    price:5999
},
  {
    itemname:"ty course",
    price:4999
},
  {
    itemname:"rust course",
    price:1999
},
]

const pricetopy=shoppingcart.reduce((acc,item)=>acc+item.price
,0)
console.log(pricetopy)

//Output 15996