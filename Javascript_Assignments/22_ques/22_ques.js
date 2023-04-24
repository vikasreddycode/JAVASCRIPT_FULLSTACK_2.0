const ages = [19,22,19,24,20,25,26,24,25,24];
console.log(`${ages.sort()}`);
console.log(`the maximum age is${ages[ages.length-1]} and the minimum age is ${ages[0]}`);
function medianval(ages)
{
    let median  = 0;
    if (ages.length%2==0)
    {
        median = Math.round((ages[Math.floor(ages.length/2)-2]+ages[Math.floor(ages.length/2)-1])/2);
    }
    else
    {
        median = ages[Math.floor(ages.length/2)-1]
    }
    return median;
}
function avg(ages)
{
    let sum = 0;
    for (let i=0;i<ages.length;i++)
    {
      sum =  sum+ ages[i];
    }
    return sum;
}
console.log(`the average is ${avg(ages)/ages.length}`);
console.log(`the median is ${medianval(ages)}`);
console.log(`the range is ${ages[ages.length-1]-ages[0]}`);
console.log(`the comparison is ${Math.abs(ages[0]-(avg(ages)/ages.length))===Math.abs(ages[ages.length]-(avg(ages)/ages.length))}`)