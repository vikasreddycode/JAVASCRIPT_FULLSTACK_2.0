import logo from './logo.svg';
import './App.css';
import  React,{useEffect} from 'react'
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios"
import {useState} from 'react'
import Card1 from './Card';
function App() {
const [details, setdetails] = useState({})
const fetchdetails = async () => {
  const {data} = await Axios.get('https://randomuser.me/api/')
  console.log("RESPONSE:",data)
  const details = data.results[0]
  setdetails(details)
}
useEffect(() => {
fetchdetails()
},[])

  return (
<Container fluid className='p-4 bg-primary App'>
  <Row>
    <Col md={4} className="offset-md-4 mt-4">
   <Card1 details={details}/>
    </Col>
  </Row>

</Container>
    
  );
}

export default App;
