import React from "react";
import { useContext } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import {FaCheckDouble} from "react-icons/fa"
import { Todocontext } from "../Context/Todocontext";
import { REMOVE_TODO } from "../Context/action.types";
const Todos = () => {
 const{todos,dispatch} = useContext(Todocontext)
 return (
    <ListGroup className="mt-5 mb-20 items">
    {todos.map(todo => (
        <ListGroupItem key={todo.id}>
        {todo.todoString}
        <span className="float-right" onClick={() => dispatch({type:REMOVE_TODO  ,
        payload:todo.id})}><FaCheckDouble/></span>
        </ListGroupItem>
    ))}
    </ListGroup>
 )
};
export default Todos;