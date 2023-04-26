// // function sum2(...args)
// // {
// //     console.log(args);
// //     // let sum = 0;
// //     let sum =args.reduce((acc,curr) => acc + curr,0);
// //     return sum;
// // }
// // let b = sum2(1,2,3,4,5,6);
// // console.log(b);
// try
// {
// let m = 5/0;
// console.log(m1);
// }
// catch (error1)
// {
//     console.log(error1.name);
// }
// finally{
//     console.log("i will always run");
// }
function func(width)
{
    
    if(isNaN(width))
    {
        throw new Error("enter a number");
    }
}
try
{
    func("vicky");
}catch(e)
{
    console.log(e);
}