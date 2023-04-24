function bmi(age,weight,height)
{
    if(age<20)
    {
        console.log("you should be greater than or equal to 20 yrs");
        return "none";
   }
   else{
    let bmivalue =  Math.round((weight)/(height*height));
    if(bmivalue<18.5)
    {
        return "Underweight";
    }
    else if(bmivalue>=18.5 && bmivalue<=24.9)
    {
        return "Normalweight";
    }
    else if(bmivalue>=25 && bmivalue<=29.9)
    {
        return "Overweight";
    }
    else if(bmivalue>=30 )
    {
        return "Obese";
    }
   } 
}
let y = bmi(20,46,1.3);
console.log(`${y}`);