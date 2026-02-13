// const div=document.getElementsByTagName('div');

// div[0].innerText="Hello World";
// div[0].style.color='red';
// div[0].style.backgroundColor='cyan';
// console.log(div);

//const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
// console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText="ABES Engineering College";
// h2.style.color="white";
// h2.style.backgroundColor='brown';
// console.log(h2);
// container[0].appendChild(h2);




// const button=document.getElementById('btn');
// console.log(button)

 
// function msg(){
//     document.getElementById('disp').innerHTML="<h>Loading immage....</h>";
//     setTimeout(()=>{
//       const img=document.createElement('img');
// img.src='https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('disp').innerHTML="<h2>Welcome to ABES Engineering College</h2>"
   
// container[0].appendChild(img);
//     },2000);
   
     //console.log("Hi, I m working on DOM");
    //alert("Hii, I m using DOM");

//}
//button.addEventListener('click',msg);


// Blocking and Non-blocking Code

// const button=document.getElementById('btn');
// function longData(){
//     console.log("Start");
//     for(i=0;i<100000000;i++){
//         console.log(i);
//     }
//     console.log("End");
// }
// button.addEventListener('click',longData);

// console.log("start")
// setTimeout(()=>{
// console.log("Welcome to FSD")
// },2000)
// console.log("end")

//Callback function

// function greetmsg(myname){
//     return "Hii,"+myname+" Welcome to abes College";
// }

// function msgHandler(msg,clbk){
//     //console.log(msg);
//     const data=clbk(msg);
//     return data;
// }

// const student=["Rahul","Aman","Vansh"];
// student.forEach((name)=>{
// console.log(msgHandler(name,greetmsg))
// })
// const completemsg=msgHandler("Hiii",greetmsg);
//console.log(completemsg);

//Promise


// const mypromise=new Promise((resolve,reject)=>{
// const password="7868gh#$0";
// if(password.length>8){
//     resolve("Password length is ok");
// }else{
//     reject("Password length is not as per our policy");
// }
// });

// mypromise.then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)})
// .finally(()=>{
//     console.log("All the resources have closed successfully");
// })

const button=document.getElementById('btn');
const disp=document.getElementById('disp');
let table='<table border=1>';
async function fetchData(){
    disp.innerHTML="<h2>Data is loading...</h2>";
        const response=await fetch('https://dummyjson.com/recipes');
        const jsonData=await response.json();
        console.log(jsonData.recipes);
        //disp.innerHTML=`<h2>${jsonData.recipes[0].name} ${jsonData.recipes[0].id} ${jsonData.recipes[0].instructions}</h2>`;
jsonData.recipes.forEach(element => {
    table+=`<tr>
    <td><img src=${element.image} height=200 width=200 alt='image'></td>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.ingredients}</td>
    </tr>`
});

        table+='</table>';
        disp.innerHTML=table;
}
button.addEventListener('click',fetchData);