// // import fs from 'fs';

// // // Read the file
// // fs.readFile('./a.txt', 'utf8', (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   const obj = JSON.parse(data);

// //   for(let i in obj){
// //     console.log(">>",i)
// //   }

// // });
// // const obj = {
// //   name: 'John',
// //   age: 30,
// //   city: 'New York'
// // };

// // console.log(Object.keys(obj))
// function longLoop() {

//     var i = 0;

//     while (i < 10) {

//         i++;

//     }

//     console.log(i);

// }

 

// // console.log("start");


// // setTimeout(() => {

// //     console.log("settimeout");

// // }, 0);

// // process.nextTick(() => {
// //     console.log("nexttick");

// // });
// // Promise.resolve().then(() => {
// //     console.log('Promise resolve');
// //   });
// //   setImmediate(() => {
// //     console.log('setImmediate');
// //   });
  

// // longLoop();

// // console.log("end");

// // const copyPerson = (obj) => {

// //     return { ...obj };

// // };

 

// // const person1 = {

// //     name: "John",

// //     age: 30,

// //     hobbies: ["reading", "running", "cooking"],

// // };

// // person1.gender = "";

// // const person2 = copyPerson(person1);

// // person1.gender = "male";

// // person1.hobbies.pop();

 

// // console.log(person2);

// //

// const a = [2,3,4,12,4,2,3,5,7,3,1,2,4]

// function s(a) {
//     const result = {}
//     for(let i in a){
//       if(result[a[i]])
//       result[a[i]] +=1
//       else {
//         result[a[i]]= 1
//       }
     
      
//     }
   
//     console.log(result)
// }
// s(a)