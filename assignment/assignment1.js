//1
//let result = Number ("123") + 7;
//console.log (result);

2//
// let num = 0;
// if (!num ) 
//     {
//         console.log("Invalid");
//     }

3//
// num = [1,2,3,4,5,6.7,8,9,10]
// for (let i = 0; i <=10 ; i++){
//     if (i % 2 === 0)
//     { continue;}
//     {
//         console.log(i);
//     }
// }

//4
// const arr= [1,2,3,4,5]
// const x = arr.filter((itmes)=>itmes % 2==0);
// console.log(x);

//5
// const arr = [1,2,3]; 
// const arr2 = [4,5,6];
// const number = [...arr , ...arr2]
// console.log(number);

//6
// let day = 2;
// switch(day) 
// {
// case 1:
//     console.log ("sunday")
//     break;
// case 2:
//     console.log ("monday")
//     break;
// }  

//7
// const strings = ["a", "ab", "abc"];
// const lengths = strings.map;
// console.log(lengths)

//8
// function check(num) {
//     if (num % 3 === 0 && num % 5 ===0)
//         return  "Divisible by both";
//     }
//     const x = check
// console .log (x (15))

//9
// const greet = num => num * num;
// console.log(greet (5));

//10
// function greet (person)
// {
//     const {name , age} = person;
//     return `${name} is ${age} years old`;
// }
// console.log(greet ({name: "johne", age:25}));

//11
// let nums = [1,2,3,4,5];
// let add = nums.reduce (function (acc ,current ){
//     return acc + current;
// });
// console.log(add);

//12
//لسه ماوصلناش ليها

//13
// const arr = [1,3,7,2,4];
// const x = Math.max(...arr);
// console.log(x);

//14
// const obj = {
//     name: "john",
//     age: 30,
// };
// const keys = Object.keys(obj);
// console.log(keys);
//15
// const arr = "the quick brwon fox".split
// console.log(arr)

                                // B. Part 2//
//1 What is the difference between forEach and for...of? When would you use each?
// forEach تطبق (function) على كل عنصر من عناصر array ولاترجع قيمه
// for of حلقة بتدور على عناصر array وبترجع قيمه

//2 What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
//  hoisting رفع المتغيرات الى اعلى قبل التنفيذ
//  مثال:
//  console.log(x);
//  let x = 10; 
//  (TDZ) الفترة مابين الدخول scope وبين التعريف

//3 What are the main differences between == and ===?
// == تقارن بين قيمتين
// === تقارن بين القيمه والنوع

//4 Explain how try-catch works and why it is important in async operations.
//يمنع البرنامج من التوقف اثناء التشغيل لو حصل error

//5 What’s the difference between type conversion and coercion? Provide examples of each
// conversion تقوم بالتحويل manually من type الى type اخر
// coercion يقوم بتحويل types تلقائيا