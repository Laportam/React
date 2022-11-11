import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StyledComponents from './components/StyledComponents';

import Greeting from './components/Greeting';
// import Button from './components/Button';
// import Users from './components/Users';
import Counter from './components/Counter';
import UsersClassComponent from './components/UsersClassComponent';
import UsersHook from './components/UsersHook';
import Wrapper from './components/Container';

// import USERS_DATA from './data/users.json';

function App() {
 
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Greeting
            text='¡Trabajando con React!'
          >
            {/* <Button
              text="Click me!"
            /> */}
            <hr/>
          </Greeting>
          <StyledComponents/>
          <Button >Esto es un botón</Button>
          <Greeting
            
          >
            <hr/>
            <strong>I'm a children tag!</strong>
            <h5>Children H5</h5>
          </Greeting>
        </Col>
        <Col sm={12} md={6} lg={8}>
          <Counter
            subject="React"
            developerName="Jane"
          />
          <UsersHook/>
          <hr/>
          {/* <UsersClassComponent/> */}
          {/* <Users
            usersList={USERS_DATA}
          /> */}
          <Wrapper/>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;