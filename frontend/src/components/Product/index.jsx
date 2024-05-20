import React from 'react';
import './index.css';

const Product = (props) => {
  
  const { data } = props;

  if (!Array.isArray(data)) {
    console.error('Invalid prop: data should be an array');
    return null;
  }

  return (
    
        <div className='product-container'>
      {data.length > 0 ? (
        data.map((item, ind) => (
          <div key={ind} className='product-item'>
            <img src={item.product_image} alt={item.product_name} className='image'/>
            <h3>{item.product_name}</h3>
            <p>Rate: ${item.product_rate}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    
    </div>
   
    
  );
};

export default Product;
