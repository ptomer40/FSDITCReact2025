// function sum(num1,num2){
// return num1+num2;

// }


async function getServerData(){
    const serverData= await fetch('https://fakestoreapi.com/products')
}

module.exports=getServerData;