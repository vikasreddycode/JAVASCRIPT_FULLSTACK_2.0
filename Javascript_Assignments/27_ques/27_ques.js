for(let i=0 ;i<=100;i++)
{
    if(prime(i))
    {
        console.log(i);
    }
}
function prime(num)
        {
            
            for(let i=1;i<=num;i++)
            {
                if(num%i==0 && i!=num && i!=1)
                {
                        return false;
                }
            }
            return true;
        }