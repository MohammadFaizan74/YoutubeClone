import { Container,Form ,Col,Row,Button} from "react-bootstrap"

  


const Search=()=>{
    return<>
    <Container className="mt-3">
        <Row>
            <Col  sm={8}>
            <Form.Control size="lg" type="text" placeholder="serach.." className="mt-3" />
    
            </Col>
            <Col sm={4}>
            <Button variant="primary" className="mt-4">Search</Button>
            </Col>

        </Row>

    </Container>
    </>
}
export  default Search