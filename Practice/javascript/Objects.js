const obj5 =  {
    comics:'chuddyman',
    name:' ',
    newfunction : function()
    {
        this.name+="Vicky";
        console.log(this);
    },
    newfunctionval : () =>
    {
        this.name+="Vicky";
        console.log(this);
    }
};
console.log(obj5.newfunction());
console.log(obj5.newfunctionval());