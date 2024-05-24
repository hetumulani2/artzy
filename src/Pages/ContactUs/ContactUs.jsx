import { faClock, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import style from './ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="2000" >
        <Container>
<div className='one'>
<h1 className="text-center mt-100" >Get in Touch</h1>
  
  </div>          <p className='text-center mt-3'>Encourage users to reach out easily.</p>
          <p>Connect with Us / Get in Touch: Reach out to us with any questions, feedback, or inquiries you may have. We're here to assist you and provide support whenever you need it. (We're just a message away! Whether you have questions, feedback, or just want to chat, we're here to help. Reach out anytime for friendly and reliable support.)</p>
          <div className={style.contact}>
          <div className='row mt-100 '>
            <div className='col-6 '>
              <h1 className='mb-1 ' >Form Fields</h1>
              <Form >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter Your Message or Query" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className='col-6'>
            <div className='ms-5'>
            <h1 className='mb-4 ' ><FontAwesomeIcon  /> Contact Details</h1>
           <div className='d-flex flex-column gap-3'>
           <p className='fw-bold' ><FontAwesomeIcon icon={faPhone} /> Phone Number:<br /> +1234567890</p>
              <p className='fw-bold'><FontAwesomeIcon icon={faEnvelope} /> Email Address:<br /> info@example.com</p>
              <p className='fw-bold'><FontAwesomeIcon icon={faClock} /> Schedule:<br /> Mon-Fri: 9:00 AM - 5:00 PM</p>
              <p className='fw-bold'><FontAwesomeIcon icon={faMapMarkedAlt} /> Address:<br /> 123 Street Name, City, Country</p> 
           </div>
            </div>
            </div>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;
