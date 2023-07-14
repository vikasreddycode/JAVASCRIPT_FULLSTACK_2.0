import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bund from './Bund';
import { BrowserRouter as Router, Routes, Route, Navigate, Link ,Outlet,useParams,NavLink,useNavigate,useLocation} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello mawa</h1>
      <Outlet/>
      <Link className='btn btn-success' to="courses">
        Courses
      </Link>
      <Link className='btn btn-success' to="bundels">
        Bundles
      </Link>
    </div>
  );
}
function Courses() {
  const courses = ["hwkjwje","shdisd","sudsuiydsidy","siydidydsi","sjdd"];
  const cos = courses[Math.floor(Math.random()*(courses.length))]
  return ( <div>
    <h1>Hello Courses</h1>
    <NavLink style={({isActive}) => {
      return {
        backgroundColor : isActive? "pink":"blue"
      }
    }}to={`${cos}`}>
     {cos}
    </NavLink>
    <NavLink to={`tests`}>
    tests
    </NavLink>
    <h1>First One</h1>
    <Outlet/>
  </div>);  
}
function CourseId(){
  const {courseid} = useParams();
  const navigate = useNavigate();
  return(
    <div>
      <h1>URL PARAMS IS :{courseid}</h1>
      <button onClick={() => {navigate("/dashboard",{state: courseid})}}    className='btn btn-warning'>Price</button>
    </div>
  )
}
function Dashboard(){
  const  location = useLocation()
  return (<div>
    <h1>ibfo : {location.state}</h1>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="about" element={<Home/>}>
        <Route path="bundels" element={<Bund/>}/>
        <Route path="courses" element={<Courses/>}>
          <Route path=":courseid" element= {<CourseId/>}/>
        </Route>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </Router>
);
