import React, { useEffect, useState } from "react";
import Card from "./card";
import Axios from "axios";
function App()
{
    let list = ["vicky","hello","noew","when"];
    const[details,SetDetails] = useState({})
    const userdetails = async ( ) => {
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log("RESPONSE",data);
        const details = data.results[0];
        SetDetails(details)
    }
    useEffect(()=>
    {userdetails()},[list])
    return (
        <>
        <div>App</div>
        <Card myname="vicky" list={list} details={details}/>
        <button onClick={userdetails}>enter details</button>
        </>
        
    )
}
export default App;