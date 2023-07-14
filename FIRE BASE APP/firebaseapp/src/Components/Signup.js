import React from 'react'
import {Container,Form,Button,FormGroup,Label,Col,Input,Row,Card,CardBody,CardFooter,CardHeader} from "reactstrap"
import firebase from 'firebase/compat/app'
// import UserContext from "../Context/UserContext"
import { Usercontext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import {Link, Navigate, Redirect} from 'react-router-dom'
import { useState } from 'react'
import {toast} from "react-toastify"
import { useContext } from 'react'
export default function() {
  const navigate = useNavigate();
  const context = useContext(Usercontext)
  const [email,setEmail] = useState(" ");
  const[password,setPassword] = useState(" ");
  const handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email,password).then(res => {
      console.log(res)
      context.setUser({email:res.user.email,uid:res.user.uid})
    }).catch( error => {
      console.log(error);
      toast(error.message,{type:"error"})
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    handleSignup()
    navigate('/')
  }
  if(context?.user?.uid){
    return  <Navigate t0= "/" />
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signup here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary" >
                  Sign Up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
