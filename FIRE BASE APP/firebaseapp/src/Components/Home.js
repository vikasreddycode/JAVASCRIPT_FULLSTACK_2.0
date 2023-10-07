import React from 'react'
import {Container,Form,Button,FormGroup,Label,InputGroup,Col,Input,Row,Card,CardBody,CardFooter,CardHeader} from "reactstrap"
import firebase from 'firebase/compat/app'
import  Axios  from 'axios'
import Usercard from '../Compoents2/Usercard'
import Repos from '../Compoents2/Repos'
import  "cors"
import { useNavigate } from 'react-router-dom'
// import UserContext from "../Context/UserContext"
import { Usercontext } from '../Context/UserContext'
// import  useNavigate  from 'react-router-dom';
import {Link, Navigate, Redirect} from 'react-router-dom'
import { useState } from 'react'
import {toast} from "react-toastify"
import { useContext } from 'react'
export default function Home() {
  const nav = useNavigate();
  const cors = require('cors')
  const context = useContext(Usercontext);
  const [query,setQuery] = useState("")
  const[user,setUser] = useState(null)
  const fetchdetails = async() => {
    try {
  const {data} = await Axios.get(`https://api.github.com/users/${query}`);
  console.log(`https://api.github.com/users/${query}`)
  setUser(data)
  console.log(data)
    }
    catch (error){
      toast("Not able to locate user ra badvel",{type:"error"});
    }
  }
  if(context.user?.uid){
    nav("/Sigin")
  }
  return (
    <div>
      <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            
              <Button onClick={fetchdetails} color="primary">
                Fetch User
              </Button>
           
          </InputGroup>
          {user ? <Usercard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
    </div>
  )
}
