let rl = require("readline");
let  r1= rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter two numbers to perform  with a space",function(answer){
    let spl = answer.split(" ");
    num1=spl[0];
    num2=spl[1];
     function addition (num1,num2){
         console.log(`${num1}+${num2}=${Number(num1)+Number(num2)}`);
     }
     function subtraction (num1,num2){
        console.log(`${num1}-${num2}=${num1-num2}`);
    }
    function multiplication (num1,num2){
        console.log(`${num1}*${num2}=${num1*num2}`);
    }
    function division(num1,num2)
    {
        console.log(`${num1}/${num2}=${num1/num2}`);
    
    }
 addition(num1,num2);
 subtraction(num1,num2);
 division(num1,num2);
 multiplication(num1,num2);
r1.close();
});