let j = document.querySelector("ul");
let li = document.createElement("li");
li.innerHTML = `<li>Hire Me<li>`;
j.appendChild(li);
// second task
let m = document.querySelector(".search-field");
let k = m.getElementsByTagName("input")[0];
k.placeholder = "Search My Project";
// 3 task
let p = document.querySelector(".hero-left-section").querySelector("p").querySelectorAll("span")[1];
p.textContent="an Employee";
let p1 = document.querySelector(".hero-left-section").querySelector("p").querySelectorAll("span")[2];
p1.textContent = "iNeuron Intelligence Pvt Ltd";
//4 task
let img = document.querySelector(".hero-right-section").querySelector("img");
img.src="./graduation.jpg";
// console.log(img);
//5th task
// const b3 = `<button>Support Me</button>`;
let b = document.querySelector(".hero-right-section").querySelector(".hero-right-section-btns");
let  b1 = document.createElement("button");
b1.textContent = "Support Me";
console.log(b1);
b.appendChild(b1);