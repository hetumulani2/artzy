import React, { useRef, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../Images/top-10-custom-t-shirt-printing-companies-in-india_1606231176-b.jpg';
import image2 from '../../../Images/fa56a52f9ee10d8ef5ef45629049a650.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const dotsRefs = useRef([]);

  useEffect(() => {
      const slider = sliderRef.current;

      // Function to handle mouse wheel event
      const handleWheel = (e) => {
          e.preventDefault(); // Prevent default scroll behavior
          const delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail))); // Normalize scroll direction
          slider.scrollBy({
              top: delta * 100, // Adjust scroll step size
              left: 0,
              behavior: 'smooth' // Optional: Smooth scrolling
          });

          // Update current slide index based on scroll position
          setCurrentSlide(Math.floor(slider.scrollTop / slider.clientHeight));
      };

      // Add event listener for mouse wheel
      slider.addEventListener('wheel', handleWheel);

      // Clean up event listener when component unmounts
      return () => {
          slider.removeEventListener('wheel', handleWheel);
      };
  }, []);

  useEffect(() => {
      // Highlight the corresponding dot based on the current slide index
      dotsRefs.current.forEach((dotRef, index) => {
          if (index === currentSlide) {
              dotRef.classList.add('active');
          } else {
              dotRef.classList.remove('active');
          }
      });
  }, [currentSlide]);

  const handleDotClick = (index) => {
      const slider = sliderRef.current;
      slider.scrollTo({
          top: index * slider.clientHeight,
          behavior: 'smooth'
      });
      setCurrentSlide(index);
  };

  return (
  <>
         <div className="slider-container">
            <div ref={sliderRef} className="slides ">
            <div className="slide d-flex ">
                    <div className="image w-50  ">
                        {/* <img src={image1} alt="Image 1" className='w-100 h-100 ' /> */}
                    </div>
                    <div className="content w-50">
                   <h1>Step into Our Design Studio</h1>
                   <p>Begin your creative journey by exploring our user-friendly design studio. Whether it's a t-shirt, mug, or phone case, our platform makes expressing your unique style simple. Get started now and let your creativity soar.</p>
                    
                    </div>
                </div>
                <div className="slide d-flex ">
                    <div className="image w-50 ">
                        {/* <img src={image1} alt="Image 1" className='w-100 h-100 ' /> */}
                    </div>
                    <div className="content w-50">
                   <h1>Find Your Perfect Fit</h1>
                   <p>Explore our collection of top-quality products. Discover items that match your style and needs effortlessly. Start exploring now.</p>
                    
                    </div>
                </div>
                <div className="slide d-flex ">
                    <div className="image w-50 ">
                        {/* <img src={image1} alt="Image 1" className='w-100 h-100 ' /> */}
                    </div>
                    <div className="content w-50">
                   <h1>Make It Your Own</h1>
                   <p>Infuse your chosen product with your personal touch. Whether adding text, images, or adjusting colors, our tools make it a breeze. Start personalizing now and make it uniquely yours.</p>
                    
                    </div>
                </div>
                <div className="slide d-flex ">
                    <div className="image w-50 ">
                        {/* <img src={image1} alt="Image 1" className='w-100 h-100 ' /> */}
                    </div>
                    <div className="content w-50">
                   <h1>Double-Check and Confirm Your Design</h1>
                   <p> Review and confirm your creation before finalizing your order. Ensure every detail looks just the way you want it to. Once satisfied, proceed to checkout with peace of mind.</p>
                    
                    </div>
                </div>
                <div className="slide d-flex ">
                    <div className="image w-50 ">
                        {/* <img src={image1} alt="Image 1" className='w-100 h-100 ' /> */}
                    </div>
                    <div className="content w-50">
                   <h1>Secure Your Custom Creation</h1>
                   <p> Complete your purchase securely and with peace of mind. Sit back and relax as we bring your ideas to life. Trust that your custom creation will be in good hands. Place your order now and experience the joy of custom-made perfection.</p>                    
                    </div>
                </div>
              
            </div>
            <div className="dots-container d-flex flex-column gap-5">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => (dotsRefs.current[index] = el)}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
     {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="w-100  d-block"
          src={image1}
          alt="First slide"
          style={{height:"70vh"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{height:"70vh"}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
          style={{height:"70vh"}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
  </>
  )
}

export default Slider
