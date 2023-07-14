import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from "reactstrap"

export default function Cart({cartItem,removeItem,buyNow}) {
  let amount = 0;
  cartItem.forEach( item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice)
  });
  return (
    <Container>
      <h1 className='text-success'>Your Cart</h1>
      <h1>{cartItem.length}</h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
              <img height={80} src={item.tinyImage}/>
              </Col>
              <Col className='text-center'>
              <div className="text-primary">
                {item.productName}
              </div>
              <span>price:-{item.productPrice}</span>
              <Button color='danger' onClick={() => removeItem(item)}></Button>
              </Col>
            </Row>
          </ListGroupItem>
          // if everyhting is empty
          
        ))}
      </ListGroup>
      {
      (cartItem.length >= 1 ? (<Card className='text-center mt-3'>
        <CardHeader>
          Grand Total
        </CardHeader>
        <CardBody>
          Your amount for {cartItem.length} product is {cartItem.amount}
        </CardBody>
        <CardFooter>
          <Button color='success' onClick={buyNow}></Button>
        </CardFooter>
      </Card>) : (
      <h1 className='text-warning'>Cart is empty</h1>
        ) )
      }
    </Container>
  )
}
