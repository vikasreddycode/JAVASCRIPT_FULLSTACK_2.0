let rl = require("readline");
let j = rl.createInterface({
    input:process.stdin,
    output:process.stdout

})
j.question("enter answer",function(answer){
    
    function num(answer)
    {
        if (answer%2 == 0)
        {
            return true;
        }
        return false;
    }
    if(num(answer)==true)
    {
        console.log("the answer is even answer");
    }
    else
    
    {
    console.log("the answer is not even answer");
              
    }
j.close();
})
       