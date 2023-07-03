import React from "react";
import './index.css';
import { useContext } from "react";
import themecontext from "./Context";
const Header = () => {
    // const themecontext = React.createContext();
    // const state = useContext(themecontext)
    return(<div className="pr-[10%] pt-[5vh] flex justify-end">
        <button className="bg-red-600 py-[1vh] px-[1vw] rounded text-white">change theme</button>
        <div>
        <i className="material-icons pl-[5vh] text-yellow-600">sunny</i>
        </div>
    </div>)
}
export default Header;