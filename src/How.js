import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './How.css'
import wardrobe from './images/wardrobe.png'
import form from './images/form.png'
import results from './images/results.png'



class How extends React.Component {

    render() {
        return (
           
            <div className="container">
                <div className="row header-text">
                    <h1>How it works</h1>
                </div>
               
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Step 1: Pick a wardrobe</h2>
                    </div>
                    <div className="col-sm-12">
                        <img src={wardrobe}/>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-sm-12">
                        <h2>Step 2: Answer a few questions</h2>
                    </div>
                    <div className="col-sm-12">
                        <img className="form" src={form}/>
                    </div>
                   
                </div>
                <div className="row ">
                    <div className="col-sm-12">

                        <h2>Step 3: Scroll through your results</h2>
                        <h2>Step 4: Pick what you like</h2>
                        <h2>Step 5: Check the total of your picks</h2>
                        <h2>Step 6: "Shop Your Picks" will take you to the ecommerce site where you can purchase your picks</h2>
                   </div>
                   <div className="col-sm-12">
                        <img src={results}/>
                    </div>
                </div>
            </div>         
           
        )}
}

export default How;