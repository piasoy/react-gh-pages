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
                    <div className="col-sm box disabled">
                        <h2>maternity</h2>
                        <p><i>coming soon</i></p>
                      

                    </div>
                    <div className="col-sm box disabled">
                        <h2>weekend</h2>
                        <p><i>coming soon</i></p>

                    </div>
                </div>

                <div className="row box-row bottom-row">
                    <div className="col-sm-3 box disabled">
                        <h2>seasonal</h2>
                        <p><i>coming soon</i></p>

                    </div>
                    <div className="col-sm-3 box disabled">
                        <h2>vacation</h2>
                        <p><i>coming soon</i></p>

                    </div>
                    <div className="col-sm box disabled">
                        <h2>special occasion</h2>
                        <p><i>coming soon</i></p>

                    </div>
                </div>
            </div>         
           
        )}
}

export default Wardrobes;