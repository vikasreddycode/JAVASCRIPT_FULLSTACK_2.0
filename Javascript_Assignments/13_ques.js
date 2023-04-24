let j = new Date(); 
let month = (j.getMonth()+1).toString();
let day = j.getDate().toString();
let hours = j.getHours().toString();
let minutes = j.getMinutes().toString();
if(month.length<2)
{
    month='0'+month;
}
if(day.length<2)
{
    day='0'+day;
}
if(hours.length<2)
{
    hours='0'+hours;
}
if(minutes.length<2)
{
    minutes= '0'+minutes;
}
console.log(`${j.getFullYear()}-${month}-${day} ${j.getHours()}:${j.getMinutes()}`);
console.log(`${day}-${month}-${j.getFullYear()} ${j.getHours()}:${j.getMinutes()}`);
console.log(`${day}/${month}/${j.getFullYear()} ${j.getHours()}:${j.getMinutes()}`);


