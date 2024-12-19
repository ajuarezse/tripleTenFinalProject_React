import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";

function ItemModal({ activeModal, onClose }) {
  if (activeModal !== "view") return null;

  return (
    <div className={`modal ${activeModal === "view" ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
          aria-label="Close Modal"
        >
          <img
            src={closeButton}
            alt="close button"
            className="modal__close_image"
          />
        </button>
        <h2 className="modal__title">Song Name</h2>
      </div>
    </div>
  );
}

export default ItemModal;
