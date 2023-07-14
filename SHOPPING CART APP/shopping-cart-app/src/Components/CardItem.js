// import React from "react";
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    
} from "reactstrap"
import { Button } from 'react-bootstrap'
const CardItem = ({product,addincart}) => {
    // const h = addInCart(product)
    return (
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%"  src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">price:${product.productPrice}</CardText>
          <button color="success" onClick={() => addincart(product)}>Buy now</button>
            </CardBody>
        </Card>
    )
}
export default CardItem;