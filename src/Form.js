import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { CirclePicker } from 'react-color';
import './Form.css'



class Questions extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstname: '',
            clothingSize: '',
            shoeSize:'',
            budget: '',
            dresscode:'',
            color:''
        }
  
    }

    //HANDLE FORMS
    handleChange =  event => {
        this.setState({[event.target.name]: event.target.value});  
    }

    handleMenuSelect = (string, eventKey) => {
       this.setState({[string]: eventKey}); 
       this.showChoice(string)
    }

    handleClick = event =>{     
        this.setState({"color": event.hex.substr(1)})     
    }

    // buildURL = () => {
    //     this.setState({"url": `http://localhost:3000/results/${this.state.firstname}/${this.state.clothingSize}/${this.state.shoeSize}/${this.state.budget}/${this.state.dresscode}/${this.state.color}`})

    // }
   
    showChoice = (string) =>{
        return <p>{this.state[string]}</p>
    }
   
    clothingSizeArr=[{id:81, label:"clothingSize", value:"XS (0-2)"}, {id:83, label:"clothingSize", value:"S (4-6)"}, {id:85, label:"clothingSize", value:"M (8-10)"}, {id:87, label:"clothingSize", value:"L (12-14)"}, {id:89, label:"clothingSize", value:"XL (16)"}]
    shoeSizeArr=[{id:5, label:"shoeSize", value:"5"},{id:5.5, label:"shoeSize", value:"5.5"},{id:6, label:"shoeSize", value:"6"},{id:6.5, label:"shoeSize", value:"6.5"},{id:7, label:"shoeSize", value:"7"},{id:7.5, label:"shoeSize", value:"7.5"},{id:8, label:"shoeSize", value:"8"},{id:8.5, label:"shoeSize", value:"8.5"},{id:9, label:"shoeSize", value:"9"},{id:9.5, label:"shoeSize", value:"9.5"},{id:10, label:"shoeSize", value:"10"},{id:10.5, label:"shoeSize", value:"10.5"}, {id:11, label:"shoeSize", value:"11"},{id:11.5, label:"shoeSize", value:"11.5"}, {id:12, label:"shoeSize", value:"12"},{id:12.5, label:"shoeSize", value:"12.5"}]
    budgetArr =[{id:25, label:"budget", value:"max $25"}, {id:50, label:"budget", value:"max $50"}, {id:100, label:"budget", value:"max $100"}]
    dresscodeArr =[{id:1, label:"dresscode", value:"Very Formal (suits)"}, {id:1, label:"dresscode", value:"Very Casual (jeans, t-shirts)"}, {id:1, label:"dresscode", value:"Neither too formal nor too casual (slacks, blouses)"}]
     
    buildMenuItem(arr) {
       return arr.map(objectEl =>{
            return <Dropdown.Item onSelect={() => this.handleMenuSelect(objectEl.label, objectEl.id)}>
                        {objectEl.value}  
                    </Dropdown.Item>
        })
    }

    render() {
        // let url = `http://localhost:3000/results/${this.state.firstname}/${this.state.clothingSize}/${this.state.shoeSize}/${this.state.budget}/${this.state.dresscode}/${this.state.color}`
        // let url = `http://localhost:3000/results/${this.state.firstname}/${this.state.clothingSize}/${this.state.shoeSize}/${this.state.budget}/${this.state.color}`
       

        let clothingSizeChoice;
            switch (this.state.clothingSize) {
            case 81:
              clothingSizeChoice = "XS (0-2)";
              break;
            case 83:
              clothingSizeChoice = "S (4-6)";
              break;
            case 85:
               clothingSizeChoice = "M (8-10)";
              break;
            case 87: 
              clothingSizeChoice = "L (12-14)";
              break;
            case 89:
              clothingSizeChoice = "XL (16)";
          }

          let colorChoice;
            switch (this.state.color) {
            case 'f44336':
              colorChoice = "red";
              break;
            case 'e91e63':
              colorChoice = "pink";
              break;
            case '9c27b0':
                colorChoice = "purple";
                break;
            case '673ab7':
                colorChoice = "purple";
                break;
            case '3f51b5': 
                colorChoice = "blue";
                break;
            case '2196f3': 
                colorChoice = "blue";
                break;
            case '03a9f4': 
                colorChoice = "blue";
                break;
            case '00bcd4': 
                colorChoice = "blue";
                break;
            case '009688':
                colorChoice = "green";
                break;
            case '4caf50':
                colorChoice = "green";
                break;
            case '8bc34a':
                colorChoice = "green";
                break;
            case 'cddc39':
                colorChoice = "green";
                break;
            case 'ffeb3b':
                colorChoice = "yellow";
                break;
            case 'ffc107':
                colorChoice = "orange";
                break;
            case 'ff9800':
                colorChoice = "orange";
                break;
            case 'ff5722':
                colorChoice = "orange";
                break;
            case '795548':
                colorChoice = "brown";
                break;
            case '607d8b':
                colorChoice = "gray";
                 
          }
        let url = `https://bento-box-app.herokuapp.com/results/${this.state.clothingSize}/${this.state.shoeSize}/${this.state.budget}/${colorChoice}`

          //let url = `http://localhost:3000/results/${this.state.clothingSize}/${this.state.shoeSize}/${this.state.budget}/${colorChoice}`
            //   console.log(url)
        
        return (
            <div className="container form-wrapper">
                <div className="row">
                    <Form className="col-sm-5 question-form">

                    
                        <p className="dropdownHeading">Please answer the following questions.</p>
                        <Dropdown> 
                            <Dropdown.Toggle id="dropdown-basic" className="buttonWidth">
                                {this.state.clothingSize ? 'Size: ' + clothingSizeChoice : "What's your clothing size?"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="buttonWidth">
                                {this.buildMenuItem(this.clothingSizeArr)}
                            </Dropdown.Menu>
                        </Dropdown>
                                        
                        <br />
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="buttonWidth">
                                {this.state.shoeSize ? 'Shoe size: ' + this.state.shoeSize : "What's your shoe size?"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="buttonWidth">
                                {this.buildMenuItem(this.shoeSizeArr)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="buttonWidth">
                                {this.state.budget ? 'Budget per item: $' + this.state.budget: "What's your budget per item?"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="buttonWidth">
                                {this.buildMenuItem(this.budgetArr)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <Form.Group>
                            <Form.Label>
                                {this.state.color ? 'Color: ' + colorChoice: "Which of these colors do you like best?"}

                            </Form.Label>                    
                                <CirclePicker className="colorPicker" name="color" onChange={this.handleClick}/>  

                        </Form.Group>
                        <a href={url}><Button className="buttonWidth submitButton">Go To My Wardrobe</Button></a>

                    </Form>
                </div>  
             
            </div>
        );
  }
  
}

export default Questions;