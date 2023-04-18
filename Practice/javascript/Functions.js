// 
function nowvalue()
{
    let  sum  = 0;
    for(const i of arguments)
{
    sum = sum + i;
}
return sum;
}
console.log(nowvalue(6,5,4,3,2,4));