// // // // const h = (n) =>
// // // // {
// // // //     return n**2;
// // // // }
// // // // function  cube(h,n)
// // // // {
// // // // return h(n)*n;
// // // // }
// // // // let k = cube(h,3);
// // // // console.log(k);
// // // let array  = [1,2,3,4,5,6,7,7,8];
// // // function func(a)
// // // {
// // //     console.log(a);
// // // }
// // // array.forEach(func);
// // // //set timepout 
// // setTimeout(()=>{
// // console.log("helo wama");
// // },3000) ;
// // setInterval(()=>{
// // console.log("hello");
// // },3000)
// let arr = [1,2,3];
// let k =arr.map(func);
// function func(num)
// {
//     return Number(num)+Number(3);
// }
// console.log(k);
//filter function
const count = ["India","Vickyland","DisneyLand","Marvel"];
const vel = count.filter((i) => i.includes("Land"));
console.log(vel);
