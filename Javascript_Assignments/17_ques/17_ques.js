let rl = require("readline");
let  r1= rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter month and space seperated year",function(answer){
    let spl = answer.split(" ");
    monthnumber=spl[0];
    year=spl[1];
    console.log(monthnumber);
    console.log(year);
    function days(monthnumber,year)
        {
            let dat = new Date(year,monthnumber,1);
            return dat;
        }
        let days2= new Date(days(monthnumber,year)-1);
        console.log(`the number of days is ${days2.getDate()}`);
        // console.log(`the number of days is ${(days(monthnumber,year)-1).getDate()}`);
    
r1.close();
});
        // let year = prompt("enter the year");
        