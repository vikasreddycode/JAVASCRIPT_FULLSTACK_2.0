import  React from 'react';
import  ReactDOM  from 'react-dom/client';
import "./styles.css"
import "./index.css"
import App from './App';

function root(){
    return (
        <div>
               <App/>
        </div>
    
    )
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<App/>);