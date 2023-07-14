import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"
import {Container,Row,Col} from "reactstrap"
import { ToastContainer } from 'react-bootstrap';
import './App.css';
import {useState} from "react"
import { Toast } from 'bootstrap';
import Buysection from './Components/Buysection';
import Cart from './Components/Cart';

function App() {
const [cartItem,setCartItem] = useState([])
const addincart = Item  => {
  const isAlreadyAdded = cartItem.findIndex(function(array){
    return array.id===Item.id
  });
  console.log("came here");

  if(isAlreadyAdded !== -1){
    Toast("already in cart",{type:"error"});
  return 

  }
  setCartItem([...cartItem,Item])
  Toast("already in cart",{type:"success"})

}
 const buyNow = () => {
  setCartItem([])
  Toast("purchase complete",{type:"success"})
 }
 const removeitem = item => {
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
 }

  return (
    <Container fluid>
<ToastContainer>
  <Row>
    <Col >
      <Buysection addincart={addincart}/>
    </Col>
    <Col md="4">
      <h1>{cartItem.length}</h1>
      <Cart cartItem={cartItem} buyNow={buyNow} removeitem={removeitem}/>
    </Col>
  </Row>
</ToastContainer>
    </Container>
  );
}

export default App;
