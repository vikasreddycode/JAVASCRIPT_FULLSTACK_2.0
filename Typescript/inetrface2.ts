interface User 
{
    name:string,
    id:string,
    goid?:number,
    action:()=> string
}
let b:User = {
    name:"shdksd",id:"jhsjshd",action() {
        return "now"
    },
}