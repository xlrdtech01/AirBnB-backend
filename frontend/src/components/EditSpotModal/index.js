import React, {useState} from "react"
import { Modal } from "../../context/Modal";
import EditSpotForm from "./EditSpotForm.js"
import "./EditSpotModal.css"


function EditSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="editSpot-modal-btn"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSpotForm closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default EditSpotFormModal;
