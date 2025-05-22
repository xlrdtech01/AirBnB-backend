import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "./SignupForm";
import "./SignupModal.css"

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signup-btn-homepage" onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
