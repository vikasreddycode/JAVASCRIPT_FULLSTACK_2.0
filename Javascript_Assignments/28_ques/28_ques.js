const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("enter the answerber",function(answer)
{
    function trinagle(answer)
    {
        for(let  i=1;i<=answer;i++)
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
    function square(answer)
    {
        for(let  i=1;i<=answer;i++)
        { 
            let b = " ";
              for(let j=0;j<answer;j++)
              {
                b=b+'*';
              }
              console.log(b);
        }
    }
    // square(3);
    function pyramid(answer)
    {
        for(let  i=0;i<answer;i++)
        { 
            let b = "";
              for(let j=0;j<i+(i+1);j++)
              {
                b=b+'*';
              }
              
               for(let k=0;k<answer-(i);k++)
               {
                b=" "+b;
               }
               console.log(b);
        }
    }
    trinagle(answer);
    pyramid(answer);
    square(answer);
    r1.close();
}

);

