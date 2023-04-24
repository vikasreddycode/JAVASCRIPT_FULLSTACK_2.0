const dat = new Date();
console.log(`${typeof dat }`);
console.log(`current year  is ${dat.getFullYear()}`);
console.log(`the current month is ${dat.getMonth()}`);
console.log(`today date is ${dat.getDate()}-${dat.getMonth()}-${dat.getFullYear()}`);
console.log(`the day number is ${dat.getDay()}`);
console.log(`the hours number is ${dat.getHours()}`);
console.log(`the hours number is ${dat.getMinutes()}`);
let time = Math.round( dat.getTime()/1000);
console.log(`the time in milliseconds is ${time}`);


