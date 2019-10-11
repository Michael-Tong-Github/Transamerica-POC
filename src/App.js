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
import TANavbar from './Components/Navbar/TANavbar';

// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';


// Import Images from Assets
import TransamericaLogo from './Assets/transamerica-logo-red-pyramid_tcm145-100915.svg';
console.disableYellowBox = true;

function App() {

  // console.log(window.location.href);
  // console.log(typeof (window.location.href));
  // console.log(process.env.REACT_APP_Front_End_URL);

  let disabled = true;

  return (



    <React.Fragment>
      

      <Router>
        {/*  */}
        
        {/* Navbar Component  */}
      <TANavbar />


        

        <Switch>
          <Route exact path="/" component={QuoteForms} />
          <Route path="/about" component={Test} />
        </Switch>

      </Router>
    </React.Fragment >
  );
}

export default App;
