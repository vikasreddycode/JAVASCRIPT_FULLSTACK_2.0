import React,{useState} from "react";
import PackageContext from './Context';
 const Provider = props => {
    const[mission,Setmission] =  useState({
        mname : "Go to usa",
        agent : '07',
        accept : "not accepted"

    })
    return (<>
    <PackageContext.Provider value={{data:mission,isMissionAccepted:() => {
        Setmission({...mission,accept:"ACCEPTED"})
    }}}>
        {props.children}

    </PackageContext.Provider>
    </>)
 }
 export default Provider;