import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Header.css'

class Wardrobes extends React.Component {

    render() {
        return (
           
            <div className="container">
                <div className="row header-text">
                        <h1>BentoBox helps you curate a wardrobe for all parts of life.</h1>
                        <p>Ready to make shopping & dressing easier?  Start by picking a wardrobe below.</p>             
                </div>
               
                <div className="row box-row">
                    <Link className="col-sm-6 box" to="/form">
                         <h2>work</h2>
                    </Link>       
                    <div className="col-sm box">
                        <h2>maternity</h2>
                    </div>
                    <div className="col-sm box">
                        <h2>weekend</h2>
                    </div>
                </div>

                <div className="row box-row bottom-row">
                    <div className="col-sm-3 box">
                        <h2>seasonal</h2>
                    </div>
                    <div className="col-sm-3 box">
                        <h2>vacation</h2>
                    </div>
                    <div className="col-sm box">
                        <h2>special occasion</h2>
                    </div>
                </div>
            </div>         
           
        )}
}

export default Wardrobes;