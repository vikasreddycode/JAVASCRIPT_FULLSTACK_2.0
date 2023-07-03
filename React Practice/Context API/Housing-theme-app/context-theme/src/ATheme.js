import { useState } from "react";
import ThemeContext from "./Context";
import Card from "./Body"
import React from "react";
const ATheme =(props) => {
    const b = {'light':{
        backgroundColor:'#000',
        color:'#333'

    },
    'dark':{
        'backgroundColor':'#333',
        'color':'#000'
    }};
    const [theme,Settheme] = useState(b);
    return (<ThemeContext.Provider value={theme}>
        {props.children}
        <Card/>
    </ThemeContext.Provider>)
}
export default ATheme;