import React from 'react';
import './Footer.css'


function Footer(){

        var instagramIcon = require('./Instagram.png')
        var facebookIcon = require('./Facebook.png')
        var pinterestIcon = require('./Pintrest.png')

        return (
            <div className="footer">
                <div id="container">
                    <div className="row">
                        <div className="offset-sm-5 col-sm-2">
                            <p>©2019 Bento Box</p>             
                        </div>
                        <div className="offset-sm-3 col-sm-2 social-media-icon">
                            <img src={instagramIcon}/>
                            <img src={facebookIcon}/>
                            <img src={pinterestIcon}/>
                        </div>
                    
                    </div>              
                    
                </div>
            </div>
        );
  
}

export default Footer;