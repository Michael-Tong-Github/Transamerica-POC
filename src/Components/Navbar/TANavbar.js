import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './TANavbar.css';

//React-Bootstrap Component Import Here
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Button,Badge, Container, Col, Row, NavItem } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';


// Import Images from Assets
import TransamericaLogo from '../../Assets/transamerica-logo-red-pyramid_tcm145-100915.svg';

function TANavbar() {
    console.log(window.location.href);
    console.log(typeof(window.location.href));

    console.log(process.env.REACT_APP_Front_End_URL);
    console.log(typeof(process.env.REACT_APP_Front_End_URL));
    console.log(window.location.href == process.env.REACT_APP_Front_End_URL);
 
    return (
        <React.Fragment>
       
        <style type="text/css">
          {`
          #loginButton {
            margin-left: 30px;
            }

          #transamericaNavbarBrand{
            margin-bottom:10px;
          }

          
          `}
        </style>

        <Navbar   bg="light" expand="lg" id="Navbar">
           

            <Navbar.Brand href="/" id="transamericaNavbarBrand">
                <img
                    src={TransamericaLogo} />
            </Navbar.Brand>
            
            <Nav style={{fontSize:15}} className="mr-auto">

                <LinkContainer to="/">
                    <Nav.Link disabled={window.location.href == process.env.REACT_APP_Front_End_URL ? true : false}>Life Insurance Quote</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/WhatWeOffer">
                    <Nav.Link>What We Offer</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/WhyTransamerica">
                    <Nav.Link>Why Transamerica</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Support">
                    <Nav.Link>Support</Nav.Link>
                </LinkContainer>
                
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Search</Button>
            </Form>
            <Button variant="danger" id="loginButton">Login</Button>

        </Navbar>

        </React.Fragment>



    
    );
}

export default TANavbar;



