let j = require("readline");
let m = j.createInterface({
    input:process.stdin,
    output:process.stdout
})
m.question("enter number",function(num){
    for(let i=1;i<=10;i++)
    {
        console.log(`${num}*${i}=${num*i}`);
    }
    m.close();
});
       
  