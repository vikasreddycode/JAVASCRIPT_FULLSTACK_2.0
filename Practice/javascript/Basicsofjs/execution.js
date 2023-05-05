
// var x =1 ;
// console.log(x);
// a();
// b();
// console.log(x);
// function a()
// {
//     var x =10;
//     console.log(x);
// }
// function b()
// {
//     var x =100;
//     console.log(x);
// }
const arr  = ["vikas","viclc","egg","gwhewebhewewo","ksjdksjdks"];
arr.forEach((val)=>{console.log(val)});
arr[0]="new";
const val  = {hello:"new",ball:"red",orange:"yellow"};
val['hello'] = "old";
console.log(val);
let  b = arr.reduce((acc,curr)=>acc+curr,"");
console.log(b);