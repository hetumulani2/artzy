// Products.jsx

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../Images/hoodies.jpg';
import thumbnail1 from '../../Images/images.jpg';
import thumbnail2 from '../../Images/mobile.webp';
import thumbnail3 from '../../Images/mug.jpg';
import thumbnail4 from '../../Images/jackets.jpg';
import ProductDetail from './ProductDetail/ProductDetail';

const Products = () => {
    const [mainImage, setMainImage] = useState(image1);

  // Function to handle thumbnail click and update main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Function to handle color selection and update main image
  const handleColorSelect = (color) => {
    // Logic to update main image based on selected color
    // For now, setting main image to a default image
    setMainImage(image1);
  };

  return (
   
    <Container>
      <div className="row">
        <div className="col-6 mt-100 ">
          <div>
            <img src={mainImage} alt="" className="w-100 " style={{ height: "500px" }} />
          </div>
          <div className="col-6 ">
            <div className="thumbnail-container d-flex gap-3 mt-3  ">
              {/* Render thumbnails */}
              <img src={thumbnail2} alt="Thumbnail 2" className="thumbnail" onClick={() => handleThumbnailClick(thumbnail2)} style={{ width: "100px" }} />
              <img src={thumbnail3} alt="Thumbnail 3" className="thumbnail" onClick={() => handleThumbnailClick(thumbnail3)} style={{ width: "100px" }} />
              <img src={thumbnail4} alt="Thumbnail 4" className="thumbnail" onClick={() => handleThumbnailClick(thumbnail4)} style={{ width: "100px" }} />
              <img src={thumbnail4} alt="Thumbnail 4" className="thumbnail" onClick={() => handleThumbnailClick(thumbnail4)} style={{ width: "100px" }} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ProductDetail handleColorSelect={handleColorSelect} />
        </div>
      </div>
    </Container>

  );
};

export default Products;
