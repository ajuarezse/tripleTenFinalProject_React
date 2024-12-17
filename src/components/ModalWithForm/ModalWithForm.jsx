import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeButton}
            alt="close button"
            className="modal__close_button"
          />
        </button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
