// ProductDetail.jsx

import React, { useState } from 'react';
import style from './ProductDetail.module.css';

const ProductDetail = ({ handleColorSelect }) => {
  const navigate = () => {
    window.location.href = "/editor";
  }
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorClick = (color) => {
        setSelectedColor(color);
        handleColorSelect(color); // Call the parent component function to update main image
      };
  // Define available colors
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Gray', 'Purple', 'Orange', 'Pink', 'Brown', 'Teal'];

  return (
    <div className='mt-100'>
      <h1>Custom Printed Gildan Heavy Cotton T-Shirt</h1>
      <button className="btn btn-primary" onClick={()=>navigate('/editor')}>Customize Your Design</button>
      <p>Available Colors:</p>
      <div className={style.colorOptions}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${style.colorOption} ${selectedColor === color ? style.selected : ''}`}
            style={{ backgroundColor: color.toLowerCase() }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
     
      <p>{colors.length} colors are available</p>
    </div>
  );
};

export default ProductDetail;
