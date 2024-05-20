import React from "react";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import {
  FacebookOutlined,
  FacebookSharp,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import {
  FaExternalLinkSquareAlt,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaLinkedinIn,
  FaPinterestSquare,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <section className="mt-100 bg-purple py-5">
        <Container>
          <div className="row text-white pt-5">
            <div className="col-3">
              <div>
                <h4 className="text-white mb-4">ARTZY4U</h4>
                <span>Our Story</span>
                <p className="mt-3 text-white">
                  Discover the journey of Artzy4u and our commitment to
                  delivering exceptional customizable products for businesses,
                  organizations, schools, and families.
                </p>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3"> Collection</h4>
              <ul>
                <li>Clothing</li>
                <li>Hats</li>
                <li>Accessories</li>
                <li>Handbags</li>
                <li>Gifts</li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3"> Solutions</h4>
              <ul>
                <li>Custom Creations</li>
                <li>Bulk Orders</li>
                <li>Personalized Products</li>
                <li>Design Options</li>
                <li>Create Your Style</li>
                <li>Shipping & Delivery</li>
              </ul>
            </div>
            <div className="col-2">
            <h4 className="text-white mb-3"> About</h4>
              <ul>
                <li>Our Story</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Resources</h4>
              <ul>
                <li>FAQs</li>
                <li>Inspiration</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div className="row ">
            <div className="col-6">
              <p className="text-white">© 2024 Artzy4u. All Rights Reserved.</p>
            </div>
            <div className="col-6 d-flex  justify-content-end align-items-center">
              <ul className="d-flex gap-1 ">
                <li>
                  <a href="#">
                    <FaFacebookSquare
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitterSquare
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin style={{ color: "white", fontSize: "24px" }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestSquare
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
