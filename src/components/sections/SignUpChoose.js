import React, { useState } from 'react';
import classNames from 'classnames';

const outerClasses = classNames(
  'hero section center-content',
  'has-top-divider',
  'has-bottom-divider',
  'has-bg-color',
  'invert-color',
);

const innerClasses = classNames(
  'hero-inner section-inner',
  'has-top-divider',
  'has-bottom-divider'
);

const SignUpChoose = () => {
  return (
    <section className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Hello, World</h1>
            </div>
          </div>
      </div>
  </section>
  );
}

export default SignUpChoose;