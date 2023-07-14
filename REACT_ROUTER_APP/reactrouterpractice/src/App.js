import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <h1>Hello brother</h1>
   <Link to="/learn/courses">NewCourse</Link>|
   <Link to="/learn/new">NewValue</Link>
    </div>
  );
}

export default App;
