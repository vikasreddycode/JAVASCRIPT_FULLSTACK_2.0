// const bankaccountmoney ={
//     money:20000,
//     acc:1234977
// };
// const depo = {
//     amtdepo : 23000,
//     dcus: 'vicky',
    
// };
// depo.__proto__=bankaccountmoney;
String.prototype.truelength =  function()
{
    console.log(`the length of string is ${this.trim().length}`);
}
let m = "vicky";
m.truelength();