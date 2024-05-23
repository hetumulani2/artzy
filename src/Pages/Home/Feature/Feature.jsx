import React from "react";
import style from "./Feature.module.css";
import { Container } from "react-bootstrap";

const Feature = () => {
  return (
    <>
      <section className="mt-100">
        <div className="one">
          <h1 className="text-center">Design vallut</h1>
        </div>
    <Container>
    <div className={style.card}>
          <div className={style.content}>
            <p className={style.heading}>Card</p>
            <p className={style.para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              laboriosam at voluptas minus culpa deserunt delectus sapiente
              inventore pariatur
            </p>
          </div>
        </div>
    </Container>
      </section>
    </>
  );
};

export default Feature;
