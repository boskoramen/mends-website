import React, { useState } from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import classNames from 'classnames';
import Button from '../elements/Button';
import FormHint from '../elements/FormHint';
import FormLabel from '../elements/FormLabel';

const SignUpForm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

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
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label><br />
                    <Form.Control type="text" placeholder="Enter your first name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label><br />
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="hic">
                <Form.Label>HIC (Your License Number)</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter your HIC" />
              </Form.Group>
              <Form.Group controlId="areaOfPractice">
                <Form.Label>Area of Practice (ie Plumber)</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter your area of practice" />
              </Form.Group>
              <Form.Group controlId="busName">
                <Form.Label>Business Name</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter your business name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormLabel>Email Address</FormLabel><br/>
                <FormControl type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <FormLabel>Phone Number</FormLabel><br/>
                <FormControl type="tel" placeholder="Enter Phone Number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <FormLabel>Password</FormLabel><br/>
                <FormControl type="password" placeholder="Enter Password" />
              </Form.Group>
            </Form><br />
            <Button tag="a" color="primary" wideMobile href="/">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

};

export default SignUpForm;