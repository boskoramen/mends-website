import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';



const SignUpChoose = ({
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
      <div className="container-sm">
        <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Lets sign you up</h1><br></br>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="primary" wideMobile href="/signup/contractor">
                    I'm a Contractor
                    </Button>
                    <br></br>
                    <br></br>
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">Or</p>
                    <br />
                  <Button tag="a" color="primary" wideMobile href="/signup/homeowner">
                    I'm a Homeowner
                  </Button>
              </div>
            </div>
          </div>
      </div>
  </section>
  );
}

export default SignUpChoose;