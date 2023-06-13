class User2
{
    private name:string
    private id:string
    constructor (name:string,id:string)
    {
        this.name= name;
        this.id = id;
    }
    get getanme():string{
        return  `${this.name}`;
    }
    set setname(name:string)
    {
        this.name=name;
    }

}
const b:User2 = new User2("vikcuy","123v4");