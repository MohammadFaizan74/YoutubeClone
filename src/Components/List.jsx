import React from 'react'
import { Container,Row, Col,Image } from 'react-bootstrap'

const List = ({item}) => {
    
  return (
   <Container className='mt-2'>
    <Row>
        <Col sm={4}>
        <Image src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D" />
        </Col>
 
    <Col sm={8}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit!</p>
        </Col>
        </Row>

   </Container>
  )
}

export default List