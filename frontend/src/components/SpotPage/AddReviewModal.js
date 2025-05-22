import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddReview from "./AddReview";
import "./AddReviewModal.css"

function AddReviewModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <button className="add-review-btn"onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReview onClose={() =>setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
