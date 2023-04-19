const obj3 = {
    fly:true,
    coordinate:Math.random()*10+2
};
const obj4 = Object.create(obj3);
console.log(obj3);
console.log(obj4);
console.log(obj4.fly);
console.log(Object.getPrototypeOf(obj4));