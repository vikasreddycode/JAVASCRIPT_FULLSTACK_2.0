const readline =  require("readline");
const r1 =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("enter file name",function(answer){
   let j = answer.split(".")
   console.log(j[j.length-1]);
   r1.close();
});