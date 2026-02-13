// console.log("Hello World")
// var a=20;
// console.log("a="+a);


// console.log(a);
// var a=20;

// let a=50;
// if(a>10){
// let a=100;
// console.log("a="+a);
// }else{
// console.log("hhhhiiii")
// }
// console.log("hiii"+a);

// const a=23;
// a=50;

//normal function

// function fun(msg){
//     return "Hey..."+msg;
    
// }

// const data=fun("greeting....");
// console.log(data);


//function as an expression

// const data=function(a,b){
//         return a*b;
// }

// console.log(data(12,20));



//Arrow function

// const data=(msg)=>{
//     console.log("heyy.. using arrow function"+msg)
// }
// data("in react development");


// const data=msg=>msg;
// const output=data("Greeting of the day");
// console.log(output);

//IIFE
// (function(){
//     console.log("Welcome to MERN Sesssion")
// })();


// setTimeout(() => {
//     console.log("Hiiii.....")
// },1000);


// function greet(msg="Java"){
//   console.log(msg+" is a good language");
// }
// greet("python");



function selectlanguage(lang){
let result;
if(lang=="java"){
    function javaComplier(){
        return "Using java Compliler";
    }

    result=javaComplier();
}
else if(lang=='c'){
    function cComplier(){
        return "Using c Complier"
    }

    result=cComplier();
}
else {
    result="No complier found";
}
return result;
}