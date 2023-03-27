import React from "react";

import classes from './Modal.module.css';

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className={classes.backdrop} onClick={closeModal} />
          <div className={classes.modal}>
            {children}
          </div>
        </>
      )}
    </>
  );
}

export default Modal;