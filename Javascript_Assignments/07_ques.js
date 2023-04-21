let arrayname = ["vihg","pw skills","vghi","pw skil1s","gsgs","new","pw skills","news"];
let flag=0;
let firstpos=-1;
let lastpos= arrayname.lastIndexOf("pw skills")+1 ;
for(let i=0;i<arrayname.length;i++)
{
if(arrayname.lastIndexOf("pw skills",i)!=-1 && flag==0)
{
    flag = 1;
    firstpos = arrayname.lastIndexOf("pw skills",i)+1;
    break;
}
}
console.log(firstpos);
console.log(lastpos);