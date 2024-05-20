import React, { useState } from "react";
import style from "./SubCategory.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { SUBCATEGORY } from "./SubCategory.utils";
import { useNavigate } from "react-router-dom";

const SubCategory = () => {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  
  const filteredSubcategories = selectedCategory === "All"
    ? SUBCATEGORY
    : SUBCATEGORY.filter(subcategory => subcategory.name === selectedCategory);

  const uniqueCategories = ["All", ...new Set(SUBCATEGORY.map(subcategory => subcategory.name))];

  return (
    <>
      <section className="mt-100">       
        <Container>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">
                Category
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-3">
              <div className={style.filterSection}>
                <h5 className="mb-4">Filter by Category</h5>
                <ul className={style.categoryList}>
                  {uniqueCategories.map((category, index) => (
                    <li key={index}>
                      <a
                        className={`${style.categoryButton} ${selectedCategory === category ? style.active : ''}`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {filteredSubcategories.map((subcategory, index) => (
                  <div className="col-4" key={index}>
                    <div className={style.subcategory} onClick={() => navigate('/product')}>
                      <div className={style.subcategoryImage}>
                        <img
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="w-100 h-100 d-block img-fluid"
                        />
                      </div>
                      <div>
                        <p>{subcategory.name}</p>
                        <p>12 Colors available</p>
                      </div>
                      <div>
                        <span>Minimum 6 | 2 Days</span>
                      </div>
                      <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                      <div>
                        <span>$10.00</span> {/* You might want to add price field to your SUBCATEGORY objects */}
                      </div>    
                      {/* <button>Buy Now</button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SubCategory;
