import logo from './logo.svg';
import './App.css';
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import HeroContext from './Components/HeroContext';
import {useState} from 'react';
const App = () => {
  const themehook = useState("light")
  return (<>
  <ThemeContext.Provider value={themehook}>
    <div>
      <Header/>
      <HeroContext/>
    </div>

  </ThemeContext.Provider>
  </>)
}
export default App;