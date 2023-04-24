let cns = require('C:/Users/Mudimela Vikas Reddy/Desktop/JAVASCRIPT_VERSION_2.0/JAVASCRIPT_FULLSTACK_2.0/Javascript_Assignments/19_ques/countries');
let countriesvalue = cns.countries;
if( countriesvalue.includes("ETHIOPIA"))
{
    console.log("ETHIOPIA");
}
else{
    countriesvalue.push("ETHIOPIA");
    console.log("ETHIOPIA ADDED");
    console.log(countriesvalue);
}
