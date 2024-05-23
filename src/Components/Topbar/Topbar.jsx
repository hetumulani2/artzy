import React from 'react';
import { Container } from "react-bootstrap";
import { FaFacebook, FaMapMarked } from "react-icons/fa";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa6";

const Topbar = () => {
  return (
 <>
  <section>
        <div class="bg-purple py-2" style={{ color: "var(--cream)"}} >
          <Container>
            <div class="row align-items-center">
              <div class="col-md-6 text-md-left ">
                <ul class="list-inline">
                  <li class="list-inline-item mr-md-4">
                    <FaMapMarked className="fs-5 me-1" /> |
                  </li>
                  <li class="list-inline-item mr-md-4">
                    <FaEnvelope className="fs-5 me-1" /> |
                  </li>
                  <li class="list-inline-item mr-md-4">
                    <FaPhone />
                  </li>
                </ul>
              </div>
              <div class="col-md-6 text-md-right text-end pe-4"  >
                <ul class="list-inline mb-0">
                  <li class="list-inline-item mr-3">
                    <a href="#">
                      <FaFacebook className="fs-5"  style={{ color: "var(--cream)" }} />
                    </a>
                  </li>
                  <li class="list-inline-item ms-1">
                    <a href="#">
                      <FaLinkedin className="fs-5"  style={{ color: "var(--cream)" }} />
                    </a>
                  </li>
                  <li class="list-inline-item ms-1">
                    <a href="#">
                      <FaInstagram
                        className="fs-5"
                        style={{ color: "var(--cream)" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </section>
 </>
  )
}

export default Topbar
