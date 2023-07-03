import React from "react";
import './index.css'
import ThemeContext from "./Context";
import { useContext } from "react";
import { useState } from "react";
import ATheme from "./ATheme";
const Card = () => {
    const theme = useContext(ThemeContext);
 
    const b1= useState(theme);
    
  
    return (
    (<div   className="rounded h-[50vh] ml-[5vw] mt-[15vh]   w-[20vw] ring-2">
        <p>{b1.length}</p>
        {/* <div > */}
    {/* </div> */}
    {/* <p className="break-normal px-[1vw] pt-[4vh]">This is a Card designed for learning context API and is useful in learning the working the theme of context API </p>  */}
    </div>
)

    )
   
}
export default Card; 