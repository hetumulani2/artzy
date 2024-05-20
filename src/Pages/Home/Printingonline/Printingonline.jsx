import React from "react";
import Container from "react-bootstrap/Container";
import design from "../../../Images/design-studio.png";
import style from "./Printingonline.module.css";

const Printingonline = () => {
  const navigate = () => {
    window.location.href = "/editor";
  };
  return (
    <>
      <section className="mt-100">
        <Container>
          <div className="row">
            <div className="col-6">
              <div className=" mt-100 ">
                <div className="one">
                  <h1 className="text-center mb-3">Design Your Universe</h1>
                </div>
                <p>
                  Express yourself with our easy-to-use design studio. Create
                  personalized products that reflect your style effortlessly.
                  Whether it's adding your favorite quotes, uploading cherished
                  photos, or selecting vibrant colors.
                </p>
                <div className="mt-3 d-flex justify-content-center w-100">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/editor")}
                  >
                    Customize Your Design
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={style.designFlex}>
                <img src={design} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Printingonline;
