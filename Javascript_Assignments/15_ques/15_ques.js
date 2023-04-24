let rl = require("readline");
let j = rl.createInterface({
    input:process.stdin,
    output:process.stdout

})
j.question("enter percent",function(num){
    function grade(num)
    {
        if(num>=0 && num<=49)
        {
            return 'F';
        }
        else if(num>=50 && num<=59)
        {
            return 'D';
        }
        else if(num>=60 && num<=69)
        {
            return 'C';
        }
        else if(num>=70 && num<=89)
        {
            return 'B';
        }
        else if(num>=90 && num<=100)
        {
            return 'A';
        }
        
    }
    console.log(`your grade is ${grade(num)}`);
    j.close();
})
        
        
   
