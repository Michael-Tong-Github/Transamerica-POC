import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';


// Component Import Here
import QuoteForms from './Components/QuoteForm/QuoteForms';
import AboutPage from './Components/About/About';
import Test from './Components/Test';


//React-Bootstrap Component Import Here
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button,Badge } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';


// Import Images from Assets
import TransamericaLogo from './Assets/transamerica-logo-red-pyramid_tcm145-100915.svg';


function App() {

  console.log(window.location.href);
  console.log(typeof (window.location.href));

  console.log(process.env.REACT_APP_Front_End_URL);
  let disabled = true;

  return (



    <React.Fragment>
      <Router>

        <style type="text/css">
          {`
          #loginButton {
            margin-left: 30px;
            }

          #transamericaNavbarBrand{
            margin-bottom:10px;
          }

          #Navbar{
              position: sticky;
              top: 0;
          }
          `}
        </style>

        <Navbar bg="light" expand="lg" id="Navbar">

          <Navbar.Brand href="/" id="transamericaNavbarBrand">
            <img 
              src={TransamericaLogo}/>
          </Navbar.Brand>
          <Nav variant = "pills" className="mr-auto">
              <Nav.Link eventKey="quote" href="/" disabled={window.location.href == process.env.REACT_APP_Front_End_URL ? true : false} >Life Insurance Quote</Nav.Link>

              <Nav.Link href="https://www.transamerica.com/individual/what-we-offer/products/retirement-solutions/">What We Offer</Nav.Link>
              <Nav.Link href="https://www.transamerica.com/individual/why-transamerica/how-we-are-different/about-us/">Why Transamerica</Nav.Link>
              <Nav.Link href="https://www.transamerica.com/individual/support/questions/contact-us/">Support</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Search</Button>
          </Form>

          {/* <Button variant="danger" href="login" id="loginButton">Login</Button> */}
          <Button variant="danger" id="loginButton">Login</Button>

        </Navbar> 
       





        <Route exact path="/" component={QuoteForms} />
        <Route path="/about" component={Test} />
        {/* <Route path="/contact" component={Contact} /> */}


      </Router>



    </React.Fragment >
  );
}

export default App;
