import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../../../Images/top-10-custom-t-shirt-printing-companies-in-india_1606231176-b.jpg';
import style from "./Categories.module.css";
import { CATEGORIES } from "./Categories.utils";

const Categories = () => {
  const navigate = () => {
    window.location.href = "/subcategory";
  }
  return (
  <>
  
  <section className="mt-100 bg-purple py-5" >
  <Container >
      <div className=" text-center">
        <div className="one2">
        <h1 className="text-cream  mb-5" >Go-To Selection</h1>
        <p className="mb-5 text-cream">Your trusted source for essential categories, always ready when you need them.</p>
        </div>
      </div>
    <div className="row">
      
      {CATEGORIES.map((category, index) => (
              <div className="col-3" key={index}>
                <div className={style.categoriesFlex}>                
                  <div className={style.categoriesText}>
                    <h3 className="text-white" >{category.name}</h3>
                  </div>
                  <div className={style.categoriesImage}>
                    <img src={category.image} alt="" className="w-100 h-100 d-block img-fluid object-fill" onClick={() => navigate('/subcategory')} />
                  </div>
                </div>
               
              </div>
            ))}
                   {/* <div className={style.categoriesFlex}>
                     <div className={style.categoriesImage}>
                      <img src={image1} alt="" className="w-100 h-100 d-block img-fluid"  />
                     </div>
                     <div>
                      <p className="text-center mt-3">T-Shirts</p>
                     </div>
            </div> */}
      </div>


      </Container>
    </section>
  </>
  );
};

export default Categories;
