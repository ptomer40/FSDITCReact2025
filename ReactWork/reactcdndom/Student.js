const parent=document.getElementById('conatiner');
console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'300px'}},"Profile Page");
const myName=<h3 style={{color:'brown'}}>Name:Rahul</h3>;

root.render(myName);