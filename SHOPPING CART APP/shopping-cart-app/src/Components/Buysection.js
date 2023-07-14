import React , {useState,useEffect} from 'react'
import Axios from "axios"
// import {faker} from "@faker-js/faker"
// import {random,commerce} from "@faker-js/faker"
import {Container,Col,Row} from "reactstrap"
import CardItem from '../Components/CardItem'
const apikey = "nQQvKgZDjblCPVQzBdncXbSTSySl3AL9gK5FaB6ejuVLCD0G24qtG4pq"
const { faker } = require('@faker-js/faker')
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "https://api.npoint.io/652c607dcd567de28596"
const Buysection = ({addincart}) => {
 const [Product,setProduct] = useState([])
//  const fetchphotos = async ()  =>  {
//     const {data} = await Axios.get(localurl);
//     const {photos} = data;
//     const allProduct = photos.map(photo => ({
//        smallImage: photo.src?.medium,
//        tinyImage : photo.src?.large,
//        productName:faker.random.word(),
//        productPrice:faker.commerce.price(),
//        id:faker.datatype.uuid()
//     }))
//    setProduct(allProduct);
//  };
 const fetchphotos = async ()  =>  {
    const {data} = await Axios.get(url,{
        headers:{
            Authorization:apikey
        }
    });
    const {photos} = data;
    const allProduct = photos.map(photo => ({
       smallImage: photo.src?.medium,
       tinyImage : photo.src?.large,
       productName:faker.lorem.word(),
       productPrice:faker.commerce.price(),
       id:faker.string.uuid()
    }))
   setProduct(allProduct);
 };
 useEffect(() => {
fetchphotos()
 },[])
 return (
    <Container fluid>
        {/* <h1 className='text-success text-center'>Buypage</h1> */}
        <Row>
    {Product.map(product => (
        <Col md={4} key={product.id}>
            <CardItem  product={product} addincart={addincart}/>
        </Col>
    ))}
        </Row>

    </Container>
 )
};
export default Buysection;
