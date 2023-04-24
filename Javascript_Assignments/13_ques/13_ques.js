let rl = require("readline");
let j = rl.createInterface({
    input:process.stdin,
    output:process.stdout

})
j.question("enter age:",function(answer){
    let age = answer;
    if(age>=18)
    {
        console.log("You are old enough to drive");
    }
    else
    {
         console.log(`Please wait for ${18-age} years to drive`);
    }
j.close();
})
        // console.log(`${age}`)
       

   