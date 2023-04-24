let name  = "This is a string";
let splitarray = Array.from(name.split(" "));
let newarray = name.split(" ");
console.log(`${typeof splitarray === typeof newarray}`)