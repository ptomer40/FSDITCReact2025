const container=document.getElementById('conatiner');
// console.log(container)
const root=ReactDOM.createRoot(container);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'300px'}},"Web Development Profile");
const myname=React.createElement('h3',{},"Vikash Singh");
const pic=React.createElement("img",{src:"https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",style:{height:'100px', width:'100px',borderRadius:'50%'}});
const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},li1,li2,li3);
const header=React.createElement("div",{style:{display:'flex',alignItems:'center',gap:'200px',backgroundColor:'#4a3b42',color:'white'}},pic,myname);
const wrapper=React.createElement('div',{},h2,header,ul);

//JSX
const h21=<h2>Welcome to react Development</h2>;
const li4=<li>Angular</li>;
const li5=<li>Vue JS</li>
const ul1=<ul>{li4} {li5}</ul>

const container1=(
    <div>
    {h21},
    {ul1}
    </div>
)


root.render(container1);


