import React from 'react'
import {useState,useContext} from "react"
import {
    Collapse,Navbar,NavbarToggler,NavBrand,Nav,NavLink,NavbarText, NavbarBrand, NavItem
} from "reactstrap"
import {Link} from "react-router-dom"
import { Usercontext } from '../Context/UserContext'

export default function Header() {
    const {user,setUser} = useContext(Usercontext);
    const [isOpen,setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen)
    }
  return (
    <div>
        <Navbar color='info' light expand="md">
            <NavbarBrand>
                <Link to='/' className='text-white'>
                    Lco gitfire app
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {user?.email? user.email:""}
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
 <Collapse isOpen={isOpen} navbar>
 <Nav className='ml-auto' navbar>{
    user? (<NavItem>
        <NavLink tag={Link} to="/" onClick={() => {setUser(null)}} className='text-white'>
                Logout
            </NavLink>
        </NavItem>):
        (
        <><NavItem>
                                  <NavLink tag={Link} to="/signin" className='text-white'>
                                      Signin
                                  </NavLink>
                              </NavItem><NavItem>
                                      <NavLink tag={Link} to="/signup" className='text-white'>
                                          Signup
                                      </NavLink>
                                  </NavItem></>)
 }

 </Nav>
 </Collapse>
        </Navbar>
    </div>
  )
}
