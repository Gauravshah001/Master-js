//for loop


for(let i=0;i<10;i++){
    const element=i;

    if(element==5){
        console.log("make it 6");
    }
    console.log(element)
}

//Output :0
// 1
// 2
// 3
// 4
//make it 6
// 5
// 6
// 7
// 8
// 9

for(let i=0;i<=10;i++){
    console.log(`outer loop ${i}`)
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${j} and inner loop ${i}`)
    }
}


//output:
// outer loop 0
// inner loop 0 and inner loop 0
// inner loop 1 and inner loop 0
// inner loop 2 and inner loop 0
// inner loop 3 and inner loop 0
// inner loop 4 and inner loop 0
// inner loop 5 and inner loop 0
// inner loop 6 and inner loop 0
// inner loop 7 and inner loop 0
// inner loop 8 and inner loop 0
// inner loop 9 and inner loop 0
// inner loop 10 and inner loop 0
// outer loop 1
// inner loop 0 and inner loop 1
// inner loop 1 and inner loop 1
// inner loop 2 and inner loop 1
// inner loop 3 and inner loop 1
// inner loop 4 and inner loop 1
// inner loop 5 and inner loop 1
// inner loop 6 and inner loop 1
// inner loop 7 and inner loop 1
// inner loop 8 and inner loop 1
// inner loop 9 and inner loop 1
// inner loop 10 and inner loop 1
// outer loop 2
// inner loop 0 and inner loop 2
// inner loop 1 and inner loop 2
// inner loop 2 and inner loop 2
// inner loop 3 and inner loop 2
// inner loop 4 and inner loop 2
// inner loop 5 and inner loop 2
// inner loop 6 and inner loop 2
// inner loop 7 and inner loop 2
// inner loop 8 and inner loop 2
// inner loop 9 and inner loop 2
// inner loop 10 and inner loop 2
// outer loop 3
// inner loop 0 and inner loop 3
// inner loop 1 and inner loop 3
// inner loop 2 and inner loop 3
// inner loop 3 and inner loop 3
// inner loop 4 and inner loop 3
// inner loop 5 and inner loop 3
// inner loop 6 and inner loop 3
// inner loop 7 and inner loop 3
// inner loop 8 and inner loop 3
// inner loop 9 and inner loop 3
// inner loop 10 and inner loop 3
// outer loop 4
// inner loop 0 and inner loop 4
// inner loop 1 and inner loop 4
// inner loop 2 and inner loop 4
// inner loop 3 and inner loop 4
// inner loop 4 and inner loop 4
// inner loop 5 and inner loop 4
// inner loop 6 and inner loop 4
// inner loop 7 and inner loop 4
// inner loop 8 and inner loop 4
// inner loop 9 and inner loop 4
// inner loop 10 and inner loop 4
// outer loop 5
// inner loop 0 and inner loop 5
// inner loop 1 and inner loop 5
// inner loop 2 and inner loop 5
// inner loop 3 and inner loop 5
// inner loop 4 and inner loop 5
// inner loop 5 and inner loop 5
// inner loop 6 and inner loop 5
// inner loop 7 and inner loop 5
// inner loop 8 and inner loop 5
// inner loop 9 and inner loop 5
// inner loop 10 and inner loop 5
// outer loop 6
// inner loop 0 and inner loop 6
// inner loop 1 and inner loop 6
// inner loop 2 and inner loop 6
// inner loop 3 and inner loop 6
// inner loop 4 and inner loop 6
// inner loop 5 and inner loop 6
// inner loop 6 and inner loop 6
// inner loop 7 and inner loop 6
// inner loop 8 and inner loop 6
// inner loop 9 and inner loop 6
// inner loop 10 and inner loop 6
// outer loop 7
// inner loop 0 and inner loop 7
// inner loop 1 and inner loop 7
// inner loop 2 and inner loop 7
// inner loop 3 and inner loop 7
// inner loop 4 and inner loop 7
// inner loop 5 and inner loop 7
// inner loop 6 and inner loop 7
// inner loop 7 and inner loop 7
// inner loop 8 and inner loop 7
// inner loop 9 and inner loop 7
// inner loop 10 and inner loop 7
// outer loop 8
// inner loop 0 and inner loop 8
// inner loop 1 and inner loop 8
// inner loop 2 and inner loop 8
// inner loop 3 and inner loop 8
// inner loop 4 and inner loop 8
// inner loop 5 and inner loop 8
// inner loop 6 and inner loop 8
// inner loop 7 and inner loop 8
// inner loop 8 and inner loop 8
// inner loop 9 and inner loop 8
// inner loop 10 and inner loop 8
// outer loop 9
// inner loop 0 and inner loop 9
// inner loop 1 and inner loop 9
// inner loop 2 and inner loop 9
// inner loop 3 and inner loop 9
// inner loop 4 and inner loop 9
// inner loop 5 and inner loop 9
// inner loop 6 and inner loop 9
// inner loop 7 and inner loop 9
// inner loop 8 and inner loop 9
// inner loop 9 and inner loop 9
// inner loop 10 and inner loop 9
// outer loop 10
// inner loop 0 and inner loop 10
// inner loop 1 and inner loop 10
// inner loop 2 and inner loop 10
// inner loop 3 and inner loop 10
// inner loop 4 and inner loop 10
// inner loop 5 and inner loop 10
// inner loop 6 and inner loop 10
// inner loop 7 and inner loop 10
// inner loop 8 and inner loop 10
// inner loop 9 and inner loop 10
// inner loop 10 and inner loop 10


//For array

let myarray=["flash","batman","superman"]
 console.log(myarray.length);
for (let i=0;i<myarray.length;i++){
    const element=myarray[i];
    console.log(element)
   
}


//Break and continue

for(let i=0;i<20;i++){
    if(i==5){
        console.log("5 is detected")
        break
    }
    console.log(`print elements ${i}`)
}

//Output:print elements 0
// print elements 1
// print elements 2
// print elements 3
// print elements 4
// 5 is detected

for(let i=0;i<20;i++){
    if(i==5){
        console.log("5 is detected")
        continue
    }
    console.log(`print elements ${i}`)
}

//Outputprint elements 0
// print elements 1
// print elements 2
// print elements 3
// print elements 4
// 5 is detected
// print elements 6
// print elements 7
// print elements 8
// print elements 9
// print elements 10
// print elements 11
// print elements 12
// print elements 13
// print elements 14
// print elements 15
// print elements 16
// print elements 17
// print elements 18
// print elements 19


for(let i=0;i<20;i++){
    if(i==5){
        console.log("5 is detected")
    
    }
    console.log(`print elements ${i}`)
}


//Output



// 1
// 2
// 3
// 4
// 5 is detected
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
