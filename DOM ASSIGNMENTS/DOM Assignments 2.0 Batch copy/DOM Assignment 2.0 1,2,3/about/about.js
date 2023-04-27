let j1 = document.createElement("div");
j1.className="accordian";
let k = document.createElement("h3");
k.textContent = "Skills";
let v = document.createElement("p");
v.textContent = "I possess a very good command over the full stack development technologies like MERN which can be seen in my work over the github";
k.style.display = "block";
v.style.display = "block";
j1.appendChild(k);
j1.appendChild(v);
document.querySelector(".accordian-wrapper").appendChild(j1);
// 2 task
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
// 1 task
let b = document.querySelectorAll(".accordian");
for(let i =0 ;i<b.length;i++)
{
  b[i].querySelector("h3").style.backgroundColor = "#d3c3e3";
  b[i].querySelector("p").style.backgroundColor = "#f1edf5";
}





