import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func
}

const defaultProps = {
  show: false,
  setShow: () => {}
}


const SignupModal = ({ show, setShow, ...props }) => {
  
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
}

SignupModal.propTypes = propTypes;
SignupModal.defaultProps = defaultProps;

export default SignupModal;