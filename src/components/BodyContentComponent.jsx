import React from 'react'
import "./BodyContentComponent.css";

const BodyContentComponent = () => {
  return (
    <main className='body-content container'>
      <div className='body-text-content'>
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className='body-btn'>

        <button>Shop Now</button>
        <button className='secondary-btn'>Category</button>
      </div>
      <div className='shopping'><p>Also Available On</p>
      
      <div className='brand-icons'>
        <img src="/images/amazon.png" alt="amazon-logo" />
        <img src="/images/flipkart.png" alt="flipkart-logo" />

      </div>
      </div>
    
      </div>
      <div className='body-image-content'>
      <img src="/images/shoe_image.png" alt="shoe.logo" />
      </div>
    </main>
  )
}

export default BodyContentComponent