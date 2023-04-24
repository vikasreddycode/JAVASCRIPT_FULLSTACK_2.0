let rl = require("readline");
let j = rl.createInterface({
    input:process.stdin,
    output:process.stdout

})

        let aut = ["September","October","November"];
        let win = ["December","January","February"];
        let spr = ["March","April","May"];
        let sum = ["June","July","August"];
        let na = aut.concat(win,spr,sum);
        j.question(`enter months as shown from these values ${na.join(",")}`,function(month){
            function season(month)
            {
                if (aut.includes(month)){
                    return 'Autumn';
                }
                if (sum.includes(month)){
                    return 'Summer';
                }
                if(win.includes(month))
                {
                    return 'Winter';
                }
                if(spr.includes(month))
                {
                    return 'Spring';
                }
            }
            console.log(`the season is ${season(month)}`);
            j.close();
        });
      
    