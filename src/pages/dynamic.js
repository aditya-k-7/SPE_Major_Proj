
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';

export default function Dynamic() {

    const [products, setProducts] = useState("");
    useEffect(()=>{
    const fetchdata = async()=>{
        const data = await axios.get('http://localhost:5000/get');
        console.log("products>>>>",data);
        setProducts(data);
    };
    fetchdata();
    }, []);

    return(
        <Container>
                <Row>
                    {
                        products && products?.data.map((product, k)=>(
                            <Col key={k} xs={12} md={4} lg={3}>
                            <Card >
                                <Card.Img src="https://via.placeholder.com/150x75" />
    
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle>{product.email}</Card.Subtitle>
                                    <Card.Text>{product.desc}</Card.Text>
                                    <Card.Header>{product.amount}</Card.Header>
                                    <Card.Footer>{product.details}<button>Fund</button></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
    )
}