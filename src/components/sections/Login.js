import React, { useContext } from 'react';
import { Form} from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

const Login = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

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
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Login</h1>
            <div className="reveal-from-bottom" data-reveal-delay="400">
              <Form className="col-sd-6 login-form-horizontal">
                  <Form.Group controlId="firstName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="lastName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                  </Form.Group>
              </Form> <br />
              <Link to="/" className="button button-primary button-wide-mobile button-sm" onClick={() => setLoggedIn(true)}>Login</Link>
              <div class="text-center mt-4"> <span>Forgot your password?</span> <Link to="#" className="text-decoration-none">Click here</Link> </div>
              <div class="text-center mt-4"> <span>Don't have an account?</span> <Link to="/signup" className="text-decoration-none">Sign Up</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Login;