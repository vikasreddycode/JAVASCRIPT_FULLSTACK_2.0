const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
if(shoppingCart.includes('Meat') == false)
{
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
if(shoppingCart.includes('Sugar') == false)
{
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);
let j = shoppingCart.indexOf("Honey");
shoppingCart.splice(j,1);
console.log(shoppingCart);
let m = shoppingCart.indexOf('Tea');
shoppingCart[m]="Green Tea";
// shoppingCart.splice(m,1,"Green Tea");
console.log(shoppingCart);

