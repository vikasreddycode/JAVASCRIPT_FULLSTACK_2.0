import { useState,useContext } from "react";
import {FormGroup,Input,InputGroup,Button,Form,InputGroupAddon} from 'reactstrap'
import {v4} from "uuid"
import { Todocontext } from "../Context/Todocontext";
import { ADD_TODO } from "../Context/action.types";
import React from 'react'

export default function TodoForm ()  { 
    const [todoString,settodoString] = useState("")
    const { dispatch } = useContext(Todocontext);
    const handleSubmit = e => {
        e.preventDefault();
        if(todoString == ""){
            return alert("please enter a task");
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        settodoString("")
    }
    return (
    <>
    <Form onSubmit={handleSubmit}>
    <FormGroup>
        <InputGroup>
    
        <Input type="text" name="todo" onChange ={e => settodoString(e.target.value)} value ={todoString} id="todo" placeholder="your next todo" />
    <Button color="warning">ADD</Button> 
       
        </InputGroup>
    
    </FormGroup>
    </Form>
    
    </>
  )
}
