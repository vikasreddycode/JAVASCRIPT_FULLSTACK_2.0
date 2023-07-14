import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import {useState} from "react"
import "react-toastify/dist/ReactToastify.min.css"
// import firebase from "firebase/app"
import "firebase/auth"
import Home from"./Components/Home"
import Sigin from './Components/Sigin';
import Signup from './Components/Signup';
import Footer from './Layout/Footer';
import PageNotFound from './Components/PageNotFound';
import { Usercontext } from './Context/UserContext';
import Header from './Layout/Header';
import FireBaseConfig from './Config/FireBaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp(FireBaseConfig)
function App() {
  const [user,setUser] = useState(null);
  
  return (
    <Router>
      <ToastContainer/>
      <Usercontext.Provider value={{user,setUser}}>
      <Header/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/signin' Component={Sigin}/>
          <Route exact path='/signup' Component={Signup}/>
          <Route exact path='*' Component={PageNotFound}/>
        </Routes>
        <Footer/>
      </Usercontext.Provider>
    </Router>
  );
}

export default App;
