import React,{useReducer} from 'react';
import {Container} from 'reactstrap';
import  "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Todocontext } from './Context/Todocontext';
import todoReducer from "./Context/reducer"
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

const App = () => {
  const[todos ,dispatch] = useReducer(todoReducer,[])
  return(
    <Todocontext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>Todo app with context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>

    </Todocontext.Provider>
  ) 
}
export default App;