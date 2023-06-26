import React from "react";

import Modal from "react-modal";


export function ComponentModal(props) {
  return (

    
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      {props.children}
      
      
    </Modal>
  );
}
