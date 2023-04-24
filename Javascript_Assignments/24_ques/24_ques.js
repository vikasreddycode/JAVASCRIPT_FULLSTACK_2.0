let oar = [];
let ear = [];
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        ear.push(i);
        continue;
    }
    oar.push(i);
}
console.log(ear);
console.log(oar);