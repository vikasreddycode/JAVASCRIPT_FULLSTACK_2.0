import React,{useState} from 'react'
import {FormGroup,Input,InputGroup,InputGroupAddon,Button,Form,Container} from "reactstrap"
import {v4} from "uuid"
const TodoForm = ({addTodos}) =>
{
    const [todoString, settodoString] = useState(" ")
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoString == ""){
            return alert("please fill some value")
        }
        const todo = {
           todoString,
            id: v4()
        }
        addTodos(todo)
        settodoString(" ");

    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input type='text' name='todo' id='todo' placeholder='Enter a todo task' value={todoString} onChange={e => settodoString(e.target.value)}/>
                    <Button color='success'>Addon</Button>
                
                </InputGroup>
            </FormGroup>
        </Form>

    )
}
export default TodoForm;