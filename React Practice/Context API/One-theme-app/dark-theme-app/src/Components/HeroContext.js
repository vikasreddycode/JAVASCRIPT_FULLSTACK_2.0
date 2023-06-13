import React , {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import Apptheme from '../Colors';
const HeroContext = () => {
    const theme = useContext(ThemeContext)[0];
    const currenttheme = Apptheme[theme];
    return (<div style={{padding:'1rem',backgroundColor:`${currenttheme.backgroundColor}`,color:`${currenttheme.color}`,textAlign:"center"}}>
        <h1>Context theme API toggler</h1>
        <p>This is a nice paragraph</p>
        <button style={{backgroundColor:"#",padding:"10px 150px",fontSize:"20px",color:"#FFF",border:`${currenttheme.border}`}}>

        </button>
    </div>)
}
export default HeroContext;