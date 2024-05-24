import React from "react";
import { Container } from "react-bootstrap";
import style from "./Guarentee.module.css";
import image1 from "../../../Images/male-hand-typing-computer-keyboard-customer-emotions-satisfaction-meter_220873-10425.avif";

const Guarentee = () => {
  return (
    <>
      <section className="mt-100 mb-5">
        <Container>
          <div className="one">
            <h1 className="text-center">Satisfaction Oasis</h1>
            <div className={style.guarantee}>
              <div className={style.satisfation}>
                <img
                  src={image1}
                  alt=""
                  className="w-100 h-100 d-block img-fluid object-fill "
                />
              </div>
              <div>
                <p className="text-center mt-5">
                  At Artzy4u, we're dedicated to your satisfaction. If for any
                  reason you're not completely satisfied with your purchase,
                  we're here to help. Your happiness is our priority, and we'll
                  work with you to make things right. Shop confidently knowing
                  that we've got your back. Our goal is to ensure that every
                  interaction with us leaves you feeling valued and appreciated.
                  Your trust means everything to us.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Guarentee;
