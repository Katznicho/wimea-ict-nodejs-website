import React from 'react'
import './Image.css'
const Image = ({backgroundImage:{url, title, width}})=>{
    return( 
         <div className="image">
             <img  alt = "not found" 
             className="image__logo"
             src={url}>
             </img>
        <div className="image__content">
        <h3 className="imageContent__title">latest Updates</h3>
          <div className="imageContent__text">
              <h4>
              {
                  title
              }

              </h4>

              
          </div>

        </div>


         </div> 
        
        

        
    )
}

export default Image
