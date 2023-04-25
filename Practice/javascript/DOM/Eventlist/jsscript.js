document.getElementById("color").addEventListener('click',color);
function color()
{
    document.body.style.backgroundColor = randomcolor();
}
function randomcolor()
{
    let hexrange = '0123456789ABCDEF';
    let val = '#' ;
    for(i=0;i<6;i++)
    {
        val=val+hexrange[Math.floor(Math.random()*16)];
    }
    return val;
}
