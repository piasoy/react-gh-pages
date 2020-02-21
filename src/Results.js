import React from 'react';
import './Results.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

class Results extends React.Component {
   
    constructor (props) {
        super(props);
        this.state = {
            dressResults:[],
            topResults:[],
            cardiganResults:[],
            skirtResults:[],
            pantResults:[],
            shoeResults:[],
            currentDress: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
           },
            currentTop: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
            },
            currentCardigan: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
            },
            currentShoe: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
            },
            currentSkirt: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
            },
            currentPant: {
                picked: false,
                price:'',
                buttonClass:'',
                url:''
            },
            totalWardrobePrice:''
        }
  
    }

    componentDidMount(){

        let handle = this.props.match.params
        console.log(handle)
      


        let address = 'http://api.shopstyle.com/api/v2/products/?'
        let key = 'pid=uid4900-32133930-29'


        let color = `c=${handle.color}`
        let size = `s=${handle.csize}`
        let shoesize = `s=${handle.ssize}`
        let price = `max-price=${handle.budget}`
        let limit = 20

        //category items
        let categoryDress = 'cat=dresses'
        let categoryTops = 'cat=womens-tops'
        let categoryCardigans = 'cat=cardigan-sweaters'
        let catergorySkirts = 'cat=skirts'
        let categoryPants = 'cat=womens-pants'
        let categoryShoes = 'cat=womens-shoes'
    
    
        //freetext items
        let freetextDress= 'sheath+work'
        let freetextTops = 'sleeveless+blouse+work'
        let freetextCardigans ='crewneck'
        let freetextSkirts='pencil'
        let freetextPants = 'slim+tailored'
        let freetextShoes = 'work+pumps'


        //API urls
        let urlDress = `${address}${key}&${categoryDress}&${size}&${price}&c=black&fts=${freetextDress}&limit=${limit}`
        let urlTops = `${address}${key}&${categoryTops}&${size}&${price}&c=white&fts=${freetextTops}&limit=${limit}`
        let urlCardigans = `${address}${key}&${categoryCardigans}&${size}&${price}&${color}&fts=${freetextCardigans}&limit=${limit}`
        let urlSkirts = `${address}${key}&${catergorySkirts}&${size}&${price}&c=black&fts=${freetextSkirts}&limit=${limit}`
      
        let urlPants = `${address}${key}&${categoryPants}&${size}&${price}&c=black&fts=${freetextPants}&limit=${limit}`
        let urlShoes = `${address}${key}&${categoryShoes}&${shoesize}&${price}&c=black&fts=${freetextShoes}&limit=${limit}`

       
        //API Call for Dresses
        fetch(urlDress)
            .then(response => response.json())
            .then(
                (data) => {
                    
                    this.setState({'dressResults': data.products})
                    console.log ('results from API:', this.state.dressResults)
                    console.log ('final state', this.state)
                },
                (error) => error)
        
         //API Call for Tops
         fetch(urlTops)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({'topResults': data.products})
                    console.log ('results from API:', this.state.topResults)
                    console.log ('final state', this.state)
                },
                (error) => error)

         //API Call for Cardigans
         fetch(urlCardigans)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({'cardiganResults': data.products})
                    console.log ('results from API:', this.state.cardiganResults)
                    console.log ('final state', this.state)
                },
                (error) => error)

        //API Call for Skirts
        fetch(urlSkirts)
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({'skirtResults': data.products})
                console.log ('results from API:', this.state.skirtResults)
                console.log ('final state', this.state)
            },
            (error) => error)

        //API Call for Pants
        fetch(urlPants)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({'pantResults': data.products})
                    console.log ('results from API:', this.state.pantResults)
                    console.log ('final state', this.state)
                },
                (error) => error)

        //API Call for Shoes
        fetch(urlShoes)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({'shoeResults': data.products})
                    console.log ('results from API:', this.state.shoeResults)
                    console.log ('final state', this.state)
                },
                (error) => error)
        
  

   
         
    }

    //handle user PICKS

    handleClick =  (name, value, clickUrl) => {
        if(this.state.currentDress.picked === false){
            this.setState({
                currentDress : {
                  ...this.state.currentDress,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              }, () => {
                console.log(this.state.currentDress)
              } )
            
        }
        if(this.state.currentDress.picked === true){
            this.setState({
                currentDress : {
                  ...this.state.currentDress,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              }, () => {
                console.log(this.state.currentDress)
              } )
            
        }  
        
    }

    handleTop = (name, value, clickUrl) => {
        if(this.state.currentTop.picked === false){
            this.setState({
                currentTop : {
                  ...this.state.currentTop,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              })           
        }
        if(this.state.currentTop.picked === true){
            this.setState({
                currentTop : {
                  ...this.state.currentTop,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              })          
        }     
    }

    handleCardigan = (name, value, clickUrl) => {
        if(this.state.currentCardigan.picked === false){
            this.setState({
                currentCardigan : {
                  ...this.state.currentCardigan,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              })           
        }
        if(this.state.currentCardigan.picked === true){
            this.setState({
                currentCardigan : {
                  ...this.state.currentCardigan,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              })          
        }     
    }

    handleShoe = (name, value, clickUrl) => {
        if(this.state.currentShoe.picked === false){
            this.setState({
                currentShoe: {
                  ...this.state.currentShoe,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              })           
        }
        if(this.state.currentShoe.picked === true){
            this.setState({
                currentShoe : {
                  ...this.state.currentShoe,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              })          
        }     
    }

    handleSkirt = (name, value, clickUrl) => {
        if(this.state.currentSkirt.picked === false){
            this.setState({
                currentSkirt: {
                  ...this.state.currentSkirt,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              })           
        }
        if(this.state.currentSkirt.picked === true){
            this.setState({
                currentSkirt : {
                  ...this.state.currentSkirt,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              })          
        }     
    }

    handlePant = (name, value, clickUrl) => {
        if(this.state.currentPant.picked === false){
            this.setState({
                currentPant: {
                  ...this.state.currentPant,
                  picked : true,
                  [name] : value,
                  buttonClass: 'pickedItem',
                  url: clickUrl
                }
              })           
        }
        if(this.state.currentPant.picked === true){
            this.setState({
                currentPant : {
                  ...this.state.currentPant,
                  picked : false,
                  [name] : '',
                  buttonClass: '',
                  url: ''
                }
              })          
        }     
    }


    //handle user slides
    handleSlide = () =>{
        this.setState({
            currentDress : {
              ...this.state.currentDress,
              picked : false,
              buttonClass: ''
            }
          })
    }

    handleSlideTop = () =>{
        this.setState({
            currentTop : {
              ...this.state.currentTop,
              picked : false,
              buttonClass: ''
            }
          })
    }

    handleSlideCardigan = () =>{
        this.setState({
            currentCardigan : {
              ...this.state.currentCardigan,
              picked : false,
              buttonClass: ''
            }
          })
    }

    handleSlideShoe = () =>{
        this.setState({
            currentShoe : {
              ...this.state.currentShoe,
              picked : false,
              buttonClass: ''
            }
          })
    }

    handleSlideSkirt = () =>{
        this.setState({
            currentSkirt : {
              ...this.state.currentSkirt,
              picked : false,
              buttonClass: ''
            }
          })
    }

    handleSlidePant = () =>{
        this.setState({
            currentPant: {
              ...this.state.currentPant,
              picked : false,
              buttonClass: ''
            }
          })
    }

    //get total for picked items
    getTotal = () => {
        let total = 0
        if(this.state.currentDress.price){
            total += Number.parseFloat(this.state.currentDress.price)
        }
        if(this.state.currentTop.price){
            total += Number.parseFloat(this.state.currentTop.price)
        }
        if(this.state.currentCardigan.price){
            total += Number.parseFloat(this.state.currentCardigan.price)
        }
        if(this.state.currentShoe.price){
            total += Number.parseFloat(this.state.currentShoe.price)
        }
        if(this.state.currentSkirt.price){
            total += Number.parseFloat(this.state.currentSkirt.price)
        }
        if(this.state.currentPant.price){
            total += Number.parseFloat(this.state.currentPant.price)
        }
        total = total.toFixed(2)
        this.setState({totalWardrobePrice: '$' + total})
    }


    //open tabs for picked items
    getPicks = (e) =>{
        // e.preventDefault();
        if(this.state.currentDress.url){window.open(this.state.currentDress.url)}
        if(this.state.currentTop.url){window.open(this.state.currentTop.url)}
        if(this.state.currentCardigan.url){window.open(this.state.currentCardigan.url)}
        if(this.state.currentShoe.url){window.open(this.state.currentShoe.url)}
        if(this.state.currentSkirt.url){window.open(this.state.currentSkirt.url)}
        if(this.state.currentPant.url){window.open(this.state.currentPant.url)}
    }
   
   
     
    
    render() {


       
       console.log('url', this.state.currentDress.url)
        let DressBox = this.state.dressResults.map((dress, index) =>{
            return <Carousel.Item className="itemDiv">
                        <p 
                            // className={sticker} + {this.state.currentDress.buttonClass} 
                            className={this.state.currentDress.buttonClass}
                            // onClick={() => {this.setState({'dressPickPrice': this.state.value })}}
                            onClick={() => {this.handleClick('price',  dress.salePrice ? dress.salePrice : dress.price, dress.clickUrl)}}

                        >
                        ♡
                        </p>

                        <img
                            className="d-block w-100"
                            src={dress.image.sizes.Best.url} 
                            alt="dress image"
                        />
                        <Carousel.Caption>
                            <p>{dress.brandedName}</p>
                            <p className="itemPrice">{dress.salePriceLabel ? 'SALE - ' + dress.salePriceLabel : dress.priceLabel}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
        })
        
        let TopBox = this.state.topResults.map((top, index) =>{
            return <Carousel.Item className="itemDiv">
                        {/* <a target="blank" rel="noopener" href={top.clickUrl}><p className="sticker">BUY</p></a>       */}
                        <p 
                            className={this.state.currentTop.buttonClass}
                            onClick={() => {this.handleTop('price',  top.salePrice ? top.salePrice : top.price, top.clickUrl )}}
                        >
                        ♡
                        </p>
                        <img
                            className="d-block w-100"
                            src={top.image.sizes.Best.url} 
                            alt="top image"
                        />
                    <Carousel.Caption>
                        <p>{top.brandedName}</p>
                        <p className="itemPrice">{top.salePriceLabel ? 'SALE - ' + top.salePriceLabel : top.priceLabel}</p>
                    </Carousel.Caption>
                    </Carousel.Item>  
        })    

        let CardiganBox = this.state.cardiganResults.map((cardigan, index) =>{
            return <Carousel.Item className="itemDiv">
                        {/* <a target="blank" rel="noopener" href={cardigan.clickUrl}><p className="sticker">BUY</p></a> */}
                        <p 
                            className={this.state.currentCardigan.buttonClass}
                            onClick={() => {this.handleCardigan('price',  cardigan.salePrice ? cardigan.salePrice : cardigan.price, cardigan.clickUrl )}}
                        >
                        ♡
                        </p>
                        <img
                            className="d-block w-100"
                            src={cardigan.image.sizes.Best.url} 
                            alt="cardigan image"
                        />
                    <Carousel.Caption>
                        <p>{cardigan.brandedName}</p>
                        <p className="itemPrice">{cardigan.salePriceLabel ? 'SALE - ' + cardigan.salePriceLabel : cardigan.priceLabel}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                               
        })   

        let SkirtBox = this.state.skirtResults.map((skirt, index) =>{
            return <Carousel.Item className="itemDiv">
                        {/* <a target="blank" rel="noopener" href={skirt.clickUrl}><p className="sticker">BUY</p></a> */}
                        <p 
                            className={this.state.currentSkirt.buttonClass}
                            onClick={() => {this.handleSkirt('price',  skirt.salePrice ? skirt.salePrice : skirt.price, skirt.clickUrl )}}
                        >
                        ♡
                        </p>
                        <img
                            className="d-block w-100"
                            src={skirt.image.sizes.Best.url} 
                            alt="skirt image"
                        />
                    <Carousel.Caption>
                        <p>{skirt.brandedName}</p>
                        <p className="itemPrice">{skirt.salePriceLabel ? 'SALE - ' + skirt.salePriceLabel : skirt.priceLabel}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                               
        }) 

        let PantBox = this.state.pantResults.map((pant, index) =>{
            return <Carousel.Item className="itemDiv">
                        {/* <a target="blank" rel="noopener" href={pant.clickUrl}><p className="sticker">BUY</p></a> */}
                        <p 
                            className={this.state.currentPant.buttonClass}
                            onClick={() => {this.handlePant('price',  pant.salePrice ? pant.salePrice : pant.price, pant.clickUrl )}}
                        >
                        ♡
                        </p>
                        <img
                            className="d-block w-100"
                            src={pant.image.sizes.Best.url} 
                            alt="cardigan image"
                        />
                    <Carousel.Caption>
                        <p>{pant.brandedName}</p>
                        <p className="itemPrice">{pant.salePriceLabel ? 'SALE - ' + pant.salePriceLabel : pant.priceLabel}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                               
        }) 

        let ShoeBox = this.state.shoeResults.map((shoe, index) =>{
            return <Carousel.Item className="itemDiv">
                        {/* <a target="blank" rel="noopener" href={shoe.clickUrl}><p className="sticker">BUY</p></a> */}
                        <p 
                            className={this.state.currentShoe.buttonClass}
                            onClick={() => {this.handleShoe('price',  shoe.salePrice ? shoe.salePrice : shoe.price, shoe.clickUrl )}}
                        >
                        ♡
                        </p>
                       <img
                            className="d-block w-100"
                            src={shoe.image.sizes.Best.url} 
                            alt="shoe image"
                        />
                       
                        
                    <Carousel.Caption>
                        <p>{shoe.brandedName}</p>
                        <p className="itemPrice">{shoe.salePriceLabel ? 'SALE - ' + shoe.salePriceLabel : shoe.priceLabel}</p>
                    </Carousel.Caption>
                    
                    </Carousel.Item>
                   
                                  
        }) 
                
        return (
            
            <div className="results-container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm">
                                <Carousel interval="3600000" onSelect={this.handleSlide}>{DressBox}</Carousel>
                            </div>
                            <div className="col-sm">
                                <Carousel  interval="3600000" onSelect={this.handleSlideTop}>{TopBox}</Carousel>
                            </div>
                            <div className="col-sm">
                                <Carousel  interval="3600000" onSelect={this.handleSlideCardigan}>{CardiganBox}</Carousel>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <Carousel  interval="3600000" onSelect={this.handleSlideShoe}>{ShoeBox}</Carousel>
                            </div>
                            <div className="col-sm">
                                <Carousel  interval="3600000" onSelect={this.handleSlideSkirt}>{SkirtBox}</Carousel>
                            </div>
                            <div className="col-sm">
                                <Carousel  interval="3600000" onSelect={this.handleSlidePant}>{PantBox}</Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 wardrobe-summary">
                        <h4>For a work wardrobe, we recommend starting with staples in neutral colors that  can be mixed and matched.  Then gradually add pieces with color and print.</h4>
                        <hr></hr>
                        <h4>Your picks:</h4>
                        <div className="row">
                            <div className="col-sm picks">dress:</div> 
                            <div className="col-sm picks">{this.state.currentDress.price ? '$'+ Number.parseFloat(this.state.currentDress.price).toFixed(2) : ''} </div>
                        </div>
                        <div className="row">
                            <div className="col-sm picks">top:</div> 
                            <div className="col-sm picks">{this.state.currentTop.price ? '$'+ Number.parseFloat(this.state.currentTop.price).toFixed(2) : ''}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm picks">cardigan:</div> 
                            <div className="col-sm picks">{this.state.currentCardigan.price ? '$'+ Number.parseFloat(this.state.currentCardigan.price).toFixed(2) : ''}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm picks">shoes:</div> 
                            <div className="col-sm picks">{this.state.currentShoe.price ? '$'+ Number.parseFloat(this.state.currentShoe.price).toFixed(2) : ''}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm picks">skirt:</div> 
                            <div className="col-sm picks">{this.state.currentSkirt.price ? '$'+ Number.parseFloat(this.state.currentSkirt.price).toFixed(2) : ''}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm picks">pants:</div> 
                            <div className="col-sm picks">{this.state.currentPant.price ? '$'+ Number.parseFloat(this.state.currentPant.price).toFixed(2) : ''}</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm picks total" onClick={this.getTotal}>Get TOTAL {this.state.totalWardrobePrice}</div> 
                            {/* <div className="col-sm picks">{this.state.totalWardrobePrice}</div> */}
                        </div>
                        <div className="row">
                            <div className="col-sm picks wardrobe" onClick={this.getPicks}>Shop your picks ></div> 
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
           
        );
  }
}

export default Results;


