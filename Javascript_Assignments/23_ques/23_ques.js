
let rl = require("readline");
let  r1= rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("enter number",function(num){
    let flag=0;
    function prime(num)
    {
        
        for(let i=1;i<=num;i++)
        {
            if(num%i==0 && i!=num && i!=1)
            {
                    flag =1;
                    break;
            }
        }
    }
     prime(num);
        if (flag==1){
            console.log(`the number ${num} is not prime `);
        }
        else{
            console.log(`the number ${num} is  prime `);
        }
    
    r1.close();
});
    
        // let num = prompt("enter number");
   
   