const items = [
    {name:"Tea",
     price:"2.4"},
     {name:"coffee",
    price:"1.5"},
    {name:"corns",
    price:"3"},
    {name:"soft drink",
    price:"1"}
];
function getInfo(){
    const ul = document.querySelector(".main_list");
    ul.innerHTML="";
    items.forEach((item)=>{
          const li =document.createElement("li");
          li.classList.add("main_content");
          const name=document.createTextNode(item.name);
          li.appendChild(name);
          const span = document.createElement("span");
          span.classList.add("mini");
          const price = document.createTextNode("$ "+item.price);
          span.appendChild(price);
          li.appendChild(span);
          ul.appendChild(li);
    })
    /*const button = document.createElement("button");
    const val = document.createTextNode("Sort");
    button.appendChild(val);
    ul.appendChild(button);*/
}
window.addEventListener("load",getInfo);
const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    items.sort((a,b)=>a.price-b.price)
    getInfo();
})
const button1 = document.querySelector(".sort-rev");
button1.addEventListener("click",()=>{
    items.sort((a,b)=>b.price-a.price);
    getInfo();
})
//getInfo();