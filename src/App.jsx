import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import { Container,Row, Col } from 'react-bootstrap';
import Main from './Components/Main';
import List from './Components/List';
import ListItem from './Components/ListItem';
import { useEffect } from 'react';
import Youtube from './axios/Youtube';



const App=()=>{


  useEffect(()=>{
async function getData(){
const response= await youtube.get("search",{
  params:{
    part:"snippet",
    maxResults:5,
    MediaKeyMessageEvent


  }
})
}
getData()
  },[])
  return <>
  <Container>
  <Search/>
  <Row>
    <Col sm={8}>
      <Main/>
    </Col>
    <Col sm={4}>
      <ListItem/>   
    </Col>

  </Row>

  </Container>


  

</>
}
export default App