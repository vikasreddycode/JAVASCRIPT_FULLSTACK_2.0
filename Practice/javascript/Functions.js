// // function sum(n1,n2)
// // {
// //     console.log(`the sum of ${n1} and ${n2} is ${n1+n2}`);
// // }
// // for(let i=1;i<=7;i++)
// // {
// //     sum(i,i+1);
// // }
// function sum2(n1,n2)
// {
//     return (n1+n2);
// }
// let j = sum2(5,6);
// console.log(j);
// console.log(sum2(33,44));
function sum(arr)
{
    let sum=0;
    for(const i of arr)
    {
        sum=sum+i;
    }
    return sum;
}
let h =sum([22,33,44,55,66]);
console.log(h);