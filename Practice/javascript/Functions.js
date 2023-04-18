// // 
// function nowvalue()
// {
//     let  sum  = 0;
//     for(const i of arguments)
// {
//     sum = sum + i;
// }
// return sum;
// }
// console.log(nowvalue(6,5,4,3,2,4));
let name = (v1,v2) => {
    console.log("this is a lambda function with parameters",v1,v2);
}
name(2,3);
let vicky = 
{
    name:'vikas',
    role:'user',
    time : '3:30',
    methodk : 'hello'
};
// console.log(vicky['name']);
// console.log(vicky.name);
// vicky.role='admin30';
// console.log(vicky.role);
for (let x in vicky)
{
    console.log(x);
}
// for (let x in vicky)
// {
//     console.log(vicky[x]);
//     console.log(x);
// }
// for (let x of vicky)
// {
//     console.log(x);
// }
