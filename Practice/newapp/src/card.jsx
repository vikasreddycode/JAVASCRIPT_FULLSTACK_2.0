import React from "react";
function Card({myname,list,details})
{
    // console.log(props)
    return (<>
    <div>myname</div>
    <h1>{details.gender}</h1>
    <h2>{details.name?.first}</h2>
    <ul>
       {list.map((ele)=>(<li key={ele}>{ele}</li>))}
    </ul>
    </>)
}
export default Card;