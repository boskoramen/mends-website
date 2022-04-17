import React, { useState } from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import classNames from 'classnames';
import Button from '../elements/Button';
import FormHint from '../elements/FormHint';
import FormLabel from '../elements/FormLabel';
import SignupTextModal from '../elements/SignUpTextModal';

const CusSignUpForm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [show, setShow] = useState(false);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section className={outerClasses}>
      <div className="container-l">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Enter Your Info</h1>
            <div className="reveal-from-bottom" data-reveal-delay="400">
              <Form className="col-md-6 form-horizontal">
                <Row>
                    <Form.Group as={Col} controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                </Row>
                <Form.Label><br />Where do you live?</Form.Label>
                <Row>
                  <Form.Group controlId="busAddress" as={Col}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                  </Form.Group>
                  <Form.Group controlId="busCity" as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>
                  <Form.Group controlId="busState" as={Col}>
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter your state" />
                  </Form.Group>
                </Row>
                <Form.Label><br />How do we contact you?</Form.Label>
                <Row>
                  <Form.Group as={Col} controlId="formBasicEmail">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasicPhone">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl type="tel" placeholder="Enter Phone Number" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Enter Password" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasicPassword">
                    <FormLabel>Re-Enter Password</FormLabel>
                    <FormControl type="password" placeholder="Re-Enter Enter Password" />
                  <FormHint />
                  </Form.Group>
                </Row>
              </Form><br />
              <Button tag="a" color="primary" wideMobile href="/">
                Submit
              </Button>
              <SignupTextModal show={show} setShow={setShow} />
              <div class="text-center mt-4"> <span>Already a member?</span> <a href="/signin" class="text-decoration-none">Login</a> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CusSignUpForm;