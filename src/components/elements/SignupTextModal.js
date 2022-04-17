import React from 'react';
import { Modal } from 'react-bootstrap';

const SignupTextModal = ({
  show,
  setShow,
  ...props}) => {

    return (
      <Modal show={show} onHide={() => {setShow(false); window.location.href="/"}}>
        <Modal.Header closeButton>
          <Modal.Title>You're All Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We've sent you an email with a link to verify your account. For the purposes of this demo,
          though, we've verified your account and you're all set!
        </Modal.Body>
      </Modal>
    );

};

export default SignupTextModal;