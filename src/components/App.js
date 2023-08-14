import React, { useState } from "react";
import "./../styles/App.css";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} onClose={closeModal}>
        <p className="modal-p">This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
