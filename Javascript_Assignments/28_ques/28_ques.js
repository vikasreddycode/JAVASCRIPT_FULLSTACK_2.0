function trinagle(num)
{
    for(let  i=1;i<=num;i++)
    { 
        let b = " ";
          for(let j=0;j<i;j++)
          {
            b=b+'*';
          }
          console.log(b);
    }
}
// trinagle(3);
function square(num)
{
    for(let  i=1;i<=num;i++)
    { 
        let b = " ";
          for(let j=0;j<num;j++)
          {
            b=b+'*';
          }
          console.log(b);
    }
}
// square(3);
function pyramid(num)
{
    for(let  i=0;i<num;i++)
    { 
        let b = "";
          for(let j=0;j<i+(i+1);j++)
          {
            b=b+'*';
          }
          
           for(let k=0;k<num-(i);k++)
           {
            b=" "+b;
           }
           console.log(b);
    }
}
pyramid(4);