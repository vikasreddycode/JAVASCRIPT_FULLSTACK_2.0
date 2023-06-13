import React ,  {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
 const Themetoggler = () => {
    const[theme,Settheme] = useContext(ThemeContext);
    return (<div onClick={()=> {
        Settheme(theme === "light"?"dark":"light")
    }}>
        <span>{theme === "light"?"Turn off":"Lights on"}</span>
        
    </div>)
 }
 export default Themetoggler;